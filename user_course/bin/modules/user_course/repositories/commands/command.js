

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneUserCourse = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user_course');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneUserCourse = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user_course');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneUserCourse = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user_course');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneUserCourse: insertOneUserCourse,
  updateOneUserCourse: updateOneUserCourse,
  deleteOneUserCourse: deleteOneUserCourse
};
