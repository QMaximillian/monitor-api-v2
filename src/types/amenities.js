import gql from 'graphql-tag'

export const typeDef = gql`
  type Amenities {
    name: String!
    description: String!
  }`
