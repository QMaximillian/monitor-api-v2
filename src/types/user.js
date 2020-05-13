import gql from 'graphql-tag'

export const typeDef = gql`
    type User {
        id: ID!
        first_name: String!
        last_name: String!
        password: String!
        email: String!
        phone_number: String!
        age: Int!
        equity: Boolean!
        gender: String!
        feet: Int!
        inches: Int!
        birthday: String!
        profile_uri: String!
        # monitor_auditions: [Audition]!
        # upcoming_audition: Audition!
        roles: [Role!]
    }
`

