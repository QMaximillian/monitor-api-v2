import gql from 'graphql-tag'

export const typeDef = gql`
         type FAQ {
           question: String!
           answer: String!
         }
       `;