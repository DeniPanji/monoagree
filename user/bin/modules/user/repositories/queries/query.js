

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneUser = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllUsers = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneUser: findOneUser,
  findAllUsers: findAllUsers
};
