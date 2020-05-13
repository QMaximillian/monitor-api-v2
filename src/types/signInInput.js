
import gql from "graphql-tag";

export const typeDef = gql`
  input SigninInput {
    email: String!
    password: String!
    role: Role!
  }`