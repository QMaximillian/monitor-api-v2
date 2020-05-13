export const resolvers = {
  Query: {
    viewer: async (parent, args, { knex }) => {
      if (!context.viewer) return
      try {
        const user = await knex("users")
          .where("users.id", context.viewer.id)
          .then(row => row[0]);

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  }
}