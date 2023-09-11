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

const isValidParamGetOneOffer = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.buyerId] = {length: {minimum: 1}};
  constraints[payload.productId] = {length: {minimum: 1}};
  constraints[payload.sellerId] = {length: {minimum: 1}};
  constraints[payload.logistic] = {length: {minimum: 4}};
  values[payload.buyerId] = payload.buyerId;
  values[payload.productId] = payload.productId;
  values[payload.sellerId] = payload.sellerId;
  values[payload.logistic] = payload.logistic;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllOffers = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.buyerId] = {length: {minimum: 1}};
  constraints[payload.productId] = {length: {minimum: 1}};
  constraints[payload.sellerId] = {length: {minimum: 1}};
  constraints[payload.logistic] = {length: {minimum: 4}};
  values[payload.buyerId] = payload.buyerId;
  values[payload.productId] = payload.productId;
  values[payload.sellerId] = payload.sellerId;
  values[payload.logistic] = payload.logistic;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneOffer = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.buyerId] = {length: {minimum: 1}};
  constraints[payload.productId] = {length: {minimum: 1}};
  constraints[payload.sellerId] = {length: {minimum: 1}};
  constraints[payload.logistic] = {length: {minimum: 4}};
  values[payload.buyerId] = payload.buyerId;
  values[payload.productId] = payload.productId;
  values[payload.sellerId] = payload.sellerId;
  values[payload.logistic] = payload.logistic;
  return await validateConstraints(values,constraints);
};

const ifExistOffer = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('offer');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneOffer: isValidParamGetOneOffer,
  isValidParamGetAllOffers: isValidParamGetAllOffers,
  isValidParamPostOneOffer: isValidParamPostOneOffer,
  ifExistOffer: ifExistOffer,
};
