import gql from "graphql-tag";

export const typeDef = gql`
  enum RoleEnum {
    MONITOR
    ACTOR
  }`