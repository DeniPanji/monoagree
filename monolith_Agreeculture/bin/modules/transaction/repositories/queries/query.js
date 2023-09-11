

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneTransaction = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('transaction');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllTransactions = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('transaction');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneTransaction: findOneTransaction,
  findAllTransactions: findAllTransactions
};
