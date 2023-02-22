

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneCourse = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('course');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllCourses = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('course');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneCourse: findOneCourse,
  findAllCourses: findAllCourses
};
