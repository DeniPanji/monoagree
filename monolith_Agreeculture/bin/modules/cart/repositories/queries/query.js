

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneCart = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('cart');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllCarts = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('cart');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneCart: findOneCart,
  findAllCarts: findAllCarts
};
