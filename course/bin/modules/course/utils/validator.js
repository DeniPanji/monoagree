

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

const isValidParamGetOneCourse = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.title] = {length: {minimum: 3}};
  values[payload.title] = payload.title;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllCourses = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.title] = {length: {minimum: 3}};
  values[payload.title] = payload.title;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneCourse = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.title] = {length: {minimum: 3}};
  constraints[payload.brand] = {length: {minimum: 3}};
  constraints[payload.jumlah_stok] = {length: {minimum: 1}};
  constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.title] = payload.title;
  values[payload.brand] = payload.brand;
  values[payload.jumlah_stok] = payload.jumlah_stok;
  values[payload.harga] = payload.harga;
  return await validateConstraints(values,constraints);
};

const ifExistCourse = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('course');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneCourse: isValidParamGetOneCourse,
  isValidParamGetAllCourses: isValidParamGetAllCourses,
  isValidParamPostOneCourse: isValidParamPostOneCourse,
  ifExistCourse: ifExistCourse,
};
