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

const isValidParamGetOneTransaction = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.status] = {length: {minimum: 1}};
  constraints[payload.termin] = {length: {minimum: 1}};
  values[payload.status] = payload.status;
  values[payload.termin] = payload.termin;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllTransactions = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.status] = {length: {minimum: 1}};
  constraints[payload.termin] = {length: {minimum: 1}};
  values[payload.status] = payload.status;
  values[payload.termin] = payload.termin;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneTransaction = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.status] = {length: {minimum: 1}};
  constraints[payload.termin] = {length: {minimum: 1}};
  values[payload.status] = payload.status;
  values[payload.termin] = payload.termin;
  return await validateConstraints(values,constraints);
};

const ifExistTransaction = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('transaction');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneTransaction: isValidParamGetOneTransaction,
  isValidParamGetAllTransactions: isValidParamGetAllTransactions,
  isValidParamPostOneTransaction: isValidParamPostOneTransaction,
  ifExistTransaction: ifExistTransaction,
};
