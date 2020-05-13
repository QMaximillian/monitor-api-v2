import gql from "graphql-tag";

export const typeDef = gql`
  type Role {
    id: String!
    enum: [RoleEnum]!
    user_id: String!
  }
`;
