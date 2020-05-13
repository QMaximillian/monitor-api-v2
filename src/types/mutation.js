import gql from "graphql-tag";

export const typeDef = gql`
type Mutation {
    signup(input: SignupInput!): AuthUser!
    signin(input: SignupInput!): AuthUser!
    # login(email: String, password: String!): Viewer!
    # updateTodo(id: String!, task: String!, completed: Boolean!, audition_id: String!): Todo!
    # saveTodo(task: String!, completed: Boolean!, audition_id: String!): Todo!
    # createMessage(text: String!, audition_id: String!, user_id: String, first_name: String, last_name: String): Message
    # updateActualStartOrEnd(id: String!, actual_start: String, actual_end: String): Appointment
  }`
