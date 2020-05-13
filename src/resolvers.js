import bcrypt from 'bcrypt';
import { uuid } from 'uuidv4';
import { authenticated, createToken } from './auth';

export const resolvers = {
  Query: {
    me: authenticated((_, __, { user }) => {
      return user;
    }),
  },
  Mutation: {
    async signup(_, { input }, { knex }) {
      const usernameExists = await knex('users')
        .where({ email: input.email })
        .then((r) => Boolean(r[0]));

      if (usernameExists) {
        throw new Error('Username exists, choose another');
      }

      const passwordHash = await bcrypt.hash(
        input.password,
        Number(process.env.SALT)
      );

      const user = await knex('users')
        .insert({
          id: uuid(),
          email: input.email,
          password: passwordHash,
        })
        .returning('*')
        .then((r) => r[0]);

      const token = createToken(user);

      return { token, user };
    },
    async signin(_, { input }, { knex }) {
      try {
        const user = await knex('users')
          .where({ email: input.email })
          .then((r) => r[0]);

        const passwordMatch = await bcrypt.compare(
          input.password,
          user.password
        );

        if (passwordMatch) {
          const token = createToken({ id: user.id, role: input.role });
          return { token, user };
        }
        throw new Error('Username or password invalid');
      } catch (error) {
        throw new Error('Signin error');
      }
    },
  },
};
