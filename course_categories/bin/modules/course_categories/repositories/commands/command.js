

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneCategories = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('categories');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneCategories = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('categories');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneCategories = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('categories');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneCategories: insertOneCategories,
  updateOneCategories: updateOneCategories,
  deleteOneCategories: deleteOneCategories
};
