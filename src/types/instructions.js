import gql from "graphql-tag";

export const typeDef = gql`
  type Instruction {
      id: String!
      instruction: String!
      audition_id: String!
  }
`;
