

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneUserCourse = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user_course');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllUserCourses = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user_course');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneUserCourse: findOneUserCourse,
  findAllUserCourses: findAllUserCourses
};
