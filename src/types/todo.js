import gql from "graphql-tag";

export const typeDef = gql`
  type Todo {
    id: ID!
    task: String!
    completed: Boolean!
    audition_id: String!
  }
`;
