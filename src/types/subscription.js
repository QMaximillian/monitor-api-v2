import gql from 'graphql-tag'

export const typeDef = gql`
    type Subscription {
        messageCreated: Message!
        upcoming_appointment: Appointment
    }

    type Message {
        id: String!
        text: String!
        audition_id: String!
        user_id: String!
        first_name: String!
        last_name: String!
    }
`;