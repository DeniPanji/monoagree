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

const isValidParamGetOneCart = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.nama] = {length: {minimum: 3}};
  constraints[payload.brand] = {length: {minimum: 3}};
  constraints[payload.jumlah_stok] = {length: {minimum: 1}};
  constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.nama] = payload.nama;
  values[payload.brand] = payload.brand;
  values[payload.jumlah_stok] = payload.jumlah_stok;
  values[payload.harga] = payload.harga;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllCarts = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.nama] = {length: {minimum: 3}};
  constraints[payload.brand] = {length: {minimum: 3}};
  constraints[payload.jumlah_stok] = {length: {minimum: 1}};
  constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.nama] = payload.nama;
  values[payload.brand] = payload.brand;
  values[payload.jumlah_stok] = payload.jumlah_stok;
  values[payload.harga] = payload.harga;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneCart = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.nama] = {length: {minimum: 3}};
  constraints[payload.brand] = {length: {minimum: 3}};
  constraints[payload.jumlah_stok] = {length: {minimum: 1}};
  constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.nama] = payload.nama;
  values[payload.brand] = payload.brand;
  values[payload.jumlah_stok] = payload.jumlah_stok;
  values[payload.harga] = payload.harga;
  return await validateConstraints(values,constraints);
};

const ifExistCart = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('cart');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneCart: isValidParamGetOneCart,
  isValidParamGetAllCarts: isValidParamGetAllCarts,
  isValidParamPostOneCart: isValidParamPostOneCart,
  ifExistCart: ifExistCart,
};
