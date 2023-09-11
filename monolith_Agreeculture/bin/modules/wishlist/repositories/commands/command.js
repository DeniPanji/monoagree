

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneWishlist = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('wishlist');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneWishlist = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('wishlist');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneWishlist = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('wishlist');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneWishlist: insertOneWishlist,
  updateOneWishlist: updateOneWishlist,
  deleteOneWishlist: deleteOneWishlist
};
