

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneTransaction = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('transaction');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneTransaction = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('transaction');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneTransaction = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('transaction');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneTransaction: insertOneTransaction,
  updateOneTransaction: updateOneTransaction,
  deleteOneTransaction: deleteOneTransaction
};
