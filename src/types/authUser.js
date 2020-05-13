import gql from 'graphql-tag'

export const typeDef = gql`
         type AuthUser {
           token: String!
           user: User!
         }
       `;