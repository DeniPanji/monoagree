const validate = require('validate.js');
const wrapper = require('../../../helpers/utils/wrapper');
const Mongo = require('../../../helpers/databases/mongodb/db');
const config = require('../../../infra/configs/global_config');

const validateConstraints = async (values,constraints) => {
  if(validate(values,constraints)){
    return wrapper.error('Bad Request',validate(values,constraints),400);
  }
  return wrapper.data(true);

};

const isValidParamGetOneUser = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  constraints[payload.email] = {length: {minimum: 3}};
  constraints[payload.password] = {length: {minimum: 3}};
  constraints[payload.role] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  values[payload.email] = payload.email;
  values[payload.password] = payload.password;
  values[payload.role] = payload.role;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllUsers = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  constraints[payload.email] = {length: {minimum: 3}};
  constraints[payload.password] = {length: {minimum: 3}};
  constraints[payload.role] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  values[payload.email] = payload.email;
  values[payload.password] = payload.password;
  values[payload.role] = payload.role;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneUser = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  constraints[payload.email] = {length: {minimum: 3}};
  constraints[payload.password] = {length: {minimum: 3}};
  constraints[payload.role] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  values[payload.email] = payload.email;
  values[payload.password] = payload.password;
  values[payload.role] = payload.role;
  return await validateConstraints(values,constraints);
};

const ifExistUser = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneUser: isValidParamGetOneUser,
  isValidParamGetAllUsers: isValidParamGetAllUsers,
  isValidParamPostOneUser: isValidParamPostOneUser,
  ifExistUser: ifExistUser,
};
