import jwt from 'jsonwebtoken';

export const createToken = ({ id, role }) =>
  jwt.sign({ id, role }, process.env.SECRET);

export const getUserFromToken = (token, knex) => {
  try {
    const user = jwt.verify(token, process.env.SECRET);
    return knex('users').where({ id: user.id }).first();
  } catch (error) {
    return null;
  }
};

export const authenticated = (next) => (root, args, context, info) => {
  if (!context.user) {
    throw new Error('not authenticated');
  }
  return next(root, args, context, info);
};

export const authorized = (role, next) => (root, args, context, info) => {
  if (context.user.role !== role) {
    throw new Error(`Must be a ${role} to access`);
  }
  return next(root, args, context, info);
};
