

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneProduct = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('product');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneProduct = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('product');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneProduct = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('product');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneProduct: insertOneProduct,
  updateOneProduct: updateOneProduct,
  deleteOneProduct: deleteOneProduct
};
