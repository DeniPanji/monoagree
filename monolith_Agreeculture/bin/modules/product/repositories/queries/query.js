

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneProduct = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('product');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllProducts = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('product');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneProduct: findOneProduct,
  findAllProducts: findAllProducts
};
