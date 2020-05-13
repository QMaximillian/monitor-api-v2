import gql from 'graphql-tag'

export const typeDef = gql`
    type Theater {
        id: ID!
        name: String!
        street_num: Int!
        street_address: String!
        city: String!
        state: String!
        zip_code: String!
    }
  `