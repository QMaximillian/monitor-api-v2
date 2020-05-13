import gql from "graphql-tag";

export const typeDef = gql`
type Season {
    id: ID!
    name: String!
    year: Int!
    season_number: Int!
  }
  `