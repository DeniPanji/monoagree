

const validate = require('validate.js');
const wrapper = require('../../../helpers/utils/wrapper');
const Mongo = require('../../../helpers/databases/mongodb/db');
// const MySQL = require('../../../helpers/databases/mysql/db');
const config = require('../../../infra/configs/global_config');

const validateConstraints = async (values,constraints) => {
  if(validate(values,constraints)){
    return wrapper.error('Bad Request',validate(values,constraints),400);
  }
  return wrapper.data(true);

};

const isValidParamGetOneCategories = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllCategoriess = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneCategories = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
};

const ifExistCategories = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('categories');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneCategories: isValidParamGetOneCategories,
  isValidParamGetAllCategoriess: isValidParamGetAllCategoriess,
  isValidParamPostOneCategories: isValidParamPostOneCategories,
  ifExistCategories: ifExistCategories,
};
