import gql from 'graphql-tag'

export const typeDef = gql`
         type Audition {
           id: ID!
           date: String!
           begin_time: String!
           end_time: String!
           interval: Int!
           street_num: Int!
           street_address: String!
           city: String!
           state: String!
           zip_code: String!
           show_name: String!
           appointments: [Appointment!]!
           instructions: [Instruction]!
           todos: [Todo]!
         }
       `;