import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { createToken, getUserFromToken } from './auth';
import knex from '../knex/knex';
import { resolvers } from './resolvers';

// TYPEDEFS


import merge from 'lodash.merge'
import {typeDef as Mutation} from './types/mutation'
import {typeDef as Query} from './types/query'
import {typeDef as AuthUser} from './types/authUser'
import {typeDef as User} from './types/user'
import {typeDef as SignupInput} from './types/signUpInput'
import {typeDef as Role} from './types/roleEnum'
import {typeDef as RoleEnum} from './types/role'
// import {typeDef as Audition} from './types/audition'
// import {typeDef as Appointment} from './types/appointment'
// import {typeDef as Theater} from './types/theater'
// import {typeDef as Season} from './types/season'
// import {typeDef as Monologue} from './types/monologue'
// import {typeDef as Song} from './types/song'
// import {typeDef as FAQ} from './types/faq'
// import {typeDef as Info} from './types/info'
// import {typeDef as Amenities} from './types/amenities'
// import {typeDef as Instruction} from './types/instructions'
// import {typeDef as Todo} from './types/todo'
// import {typeDef as Role} from './types/role'
// import {typeDef as Subscription} from './types/subscription'

const typeDefs = [
  Mutation,
  Query,
  AuthUser,
  User,
  SignupInput, 
  RoleEnum,
  Role
  // Subscription,
  // Audition,
  // Appointment,
  // Theater,
  // Season,
  // Monologue,
  // Song,
  // FAQ,
  // Info,
  // Amenities,
  // Instruction,
  // Todo,
  // Role
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    const token = req.headers.authorization;
    const user = getUserFromToken(token, knex);
    return { knex, user, createToken };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
