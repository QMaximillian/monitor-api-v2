import gql from "graphql-tag";

export const typeDef = gql`
    input SignupInput {
      email: String!
      password: String!
      first_name: String!
      last_name: String!
      role: [RoleEnum!]
  }`