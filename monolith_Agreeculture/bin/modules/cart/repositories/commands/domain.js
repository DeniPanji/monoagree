// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
const query = require('../queries/query');
// const query = require('../queries/query');
// const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
const wrapper = require('../../../../helpers/utils/wrapper');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class Cart{

  async addNewCart(payload){
    const { id } = payload;
    const cart = await query.findOneCart({id});
    if(!cart.err){
      return wrapper.error('error', 'item already exist', 400);
    }
    const data = [payload];
    let view = model.generalCart();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.buyerId)){accumulator.buyerId = value.buyerId;}
      if(!validate.isEmpty(value.productId)){accumulator.productId = value.productId;}
      if(!validate.isEmpty(value.qty)){accumulator.qty = value.qty;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneCart(document);
    return result;
  }

  async updateCart(params, payload){
    const { id } = payload;
    const cart = await query.findOneCart({id});
    if (cart.err) {
      return wrapper.error('error', 'item not found', 400);
    }
    const data = [payload];
    let view = model.generalCart();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.buyerId)){accumulator.buyerId = value.buyerId;}
      if(!validate.isEmpty(value.productId)){accumulator.productId = value.productId;}
      if(!validate.isEmpty(value.qty)){accumulator.qty = value.qty;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneCart(params, document);
    return result;
  }

  async deleteCart(params){
    const result = await command.deleteOneCart(params);
    return result;
  }

}

module.exports = Cart;
