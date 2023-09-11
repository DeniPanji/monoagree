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

const isValidParamGetOneWishlist = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.barang] = {length: {minimum: 3}};
  constraints[payload.id] = {length: {minimum: 1}};
  constraints[payload.buyerId] = {length: {minimum: 1}};
  constraints[payload.productId] = {length: {minimum: 1}};
  values[payload.barang] = payload.barang;
  values[payload.id] = payload.id;
  values[payload.buyerId] = payload.buyerId;
  values[payload.productId] = payload.productId;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllWishlists = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.barang] = {length: {minimum: 3}};
  constraints[payload.id] = {length: {minimum: 1}};
  constraints[payload.buyerId] = {length: {minimum: 1}};
  constraints[payload.productId] = {length: {minimum: 1}};
  values[payload.barang] = payload.barang;
  values[payload.id] = payload.id;
  values[payload.buyerId] = payload.buyerId;
  values[payload.productId] = payload.productId;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneWishlist = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.barang] = {length: {minimum: 3}};
  constraints[payload.id] = {length: {minimum: 1}};
  constraints[payload.buyerId] = {length: {minimum: 1}};
  constraints[payload.productId] = {length: {minimum: 1}};
  values[payload.barang] = payload.barang;
  values[payload.id] = payload.id;
  values[payload.buyerId] = payload.buyerId;
  values[payload.productId] = payload.productId;
  return await validateConstraints(values,constraints);
};

const ifExistWishlist = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('wishlist');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneWishlist: isValidParamGetOneWishlist,
  isValidParamGetAllWishlists: isValidParamGetAllWishlists,
  isValidParamPostOneWishlist: isValidParamPostOneWishlist,
  ifExistWishlist: ifExistWishlist,
};
