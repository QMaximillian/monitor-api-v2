import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    first_name: String
    last_name: String
    created_at: String
  }

  type AuthUser {
    token: String!
    user: User!
  }

  enum Role {
    ADMIN
    MEMBER
    GUEST
  }

  input SignupInput {
    email: String!
    password: String!
    role: Role!
  }

  input SigninInput {
    email: String!
    password: String!
    role: Role!
  }

  type Query {
    users: [User]
    me: User
  }

  type Mutation {
    signup(input: SignupInput!): AuthUser!
    signin(input: SigninInput!): AuthUser!
  }
`;
