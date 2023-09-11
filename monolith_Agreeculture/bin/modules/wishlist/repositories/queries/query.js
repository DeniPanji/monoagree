

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneWishlist = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('wishlist');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllWishlists = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('wishlist');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneWishlist: findOneWishlist,
  findAllWishlists: findAllWishlists
};
