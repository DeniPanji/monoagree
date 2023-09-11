// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
const query = require('../queries/query');
// const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class Offer{

  async addNewOffer(payload){
    const { id } = payload;
    const offer = await query.findOneOffer({id});
    if (!offer.err) {
      return wrapper.error('error', 'offer already exist', 400);
    }
    const data = [payload];
    let view = model.generalOffer();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.buyerId)){accumulator.buyerId = value.buyerId;}
      if(!validate.isEmpty(value.productId)){accumulator.productId = value.productId;}
      if(!validate.isEmpty(value.sellerId)){accumulator.sellerId = value.sellerId;}
      if(!validate.isEmpty(value.logistic)){accumulator.logistic = value.logistic;}
      if(!validate.isEmpty(value.rfq)){accumulator.rfq = value.rfq;}
      if(!validate.isEmpty(value.status)){accumulator.status = value.status;}
      if(!validate.isEmpty(value.termin)){accumulator.termin = value.termin;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneOffer(document);
    return result;
  }

  async updateOffer(params, payload){
    const { id } = payload;
    const offer = await query.findOneOffer({id});
    if (offer.err) {
      return wrapper.error('error', 'offer not found', 400);
    }
    const data = [payload];
    let view = model.generalOffer();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.buyerId)){accumulator.buyerId = value.buyerId;}
      if(!validate.isEmpty(value.productId)){accumulator.productId = value.productId;}
      if(!validate.isEmpty(value.sellerId)){accumulator.sellerId = value.sellerId;}
      if(!validate.isEmpty(value.logistic)){accumulator.logistic = value.logistic;}
      if(!validate.isEmpty(value.rfq)){accumulator.rfq = value.rfq;}
      if(!validate.isEmpty(value.status)){accumulator.status = value.status;}
      if(!validate.isEmpty(value.termin)){accumulator.termin = value.termin;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneOffer(params, document);
    return result;
  }

  async deleteOffer(params){
    const result = await command.deleteOneOffer(params);
    return result;
  }

}

module.exports = Offer;
