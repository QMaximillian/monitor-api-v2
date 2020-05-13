import gql from "graphql-tag";

export const typeDef = gql`
         type Appointment {
           id: String!
           start_time: String!
           end_time: String!
           actual_start: String
           actual_end: String
           user: User
         }
       `;