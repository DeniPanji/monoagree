

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneOffer = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('offer');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllOffers = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('offer');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneOffer: findOneOffer,
  findAllOffers: findAllOffers
};
