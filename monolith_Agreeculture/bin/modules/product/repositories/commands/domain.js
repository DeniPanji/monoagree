// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class Product{

  async addNewProduct(payload){
    const { id } = payload;
    const product = await query.findOneProduct({id});
    if (!product.err) {
      return wrapper.error('error', 'product already exist', 400);
    }
    const data = [payload];
    let view = model.generalProduct();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.sellerId)){accumulator.sellerId = value.sellerId;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      if(!validate.isEmpty(value.price)){accumulator.price = value.price;}
      if(!validate.isEmpty(value.stock)){accumulator.stock = value.stock;}
      if(!validate.isEmpty(value.category)){accumulator.category = value.category;}
      if(!validate.isEmpty(value.brand)){accumulator.brand = value.brand;}
      if(!validate.isEmpty(value.detail)){accumulator.detail = value.detail;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneProduct(document);
    return result;
  }

  async updateProduct(params, payload){
    const { id } = payload;
    const product = await query.findOneProduct({id});
    if (product.err) {
      return wrapper.error('error', 'product not found', 404);
    }
    const data = [payload];
    let view = model.generalProduct();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.sellerId)){accumulator.sellerId = value.sellerId;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      if(!validate.isEmpty(value.price)){accumulator.price = value.price;}
      if(!validate.isEmpty(value.stock)){accumulator.stock = value.stock;}
      if(!validate.isEmpty(value.category)){accumulator.category = value.category;}
      if(!validate.isEmpty(value.brand)){accumulator.brand = value.brand;}
      if(!validate.isEmpty(value.detail)){accumulator.detail = value.detail;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneProduct(params, document);
    return result;
  }

  async deleteProduct(params){
    const result = await command.deleteOneProduct(params);
    return result;
  }

}

module.exports = Product;
