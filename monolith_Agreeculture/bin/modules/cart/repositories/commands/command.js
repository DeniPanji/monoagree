

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneCart = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('cart');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneCart = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('cart');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneCart = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('cart');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneCart: insertOneCart,
  updateOneCart: updateOneCart,
  deleteOneCart: deleteOneCart
};
