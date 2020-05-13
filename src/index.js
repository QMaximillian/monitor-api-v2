import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { createToken, getUserFromToken } from './auth';
import knex from '../knex/knex';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    const token = req.headers.authorization;
    const user = getUserFromToken(token, knex);
    return { knex, user, createToken };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
