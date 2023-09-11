

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneOffer = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('offer');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneOffer = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('offer');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneOffer = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('offer');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneOffer: insertOneOffer,
  updateOneOffer: updateOneOffer,
  deleteOneOffer: deleteOneOffer
};
