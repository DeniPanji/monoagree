

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneCourse = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('course');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneCourse = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('course');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneCourse = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('course');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneCourse: insertOneCourse,
  updateOneCourse: updateOneCourse,
  deleteOneCourse: deleteOneCourse
};
