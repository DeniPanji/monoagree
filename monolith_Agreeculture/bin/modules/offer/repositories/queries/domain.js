// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Offer{
  constructor(param){
    this.id = param.id,
    this.buyerId = param.buyerId,
    this.productId = param.productId,
    this.sellerId = param.sellerId,
    this.logistic = param.logistic,
    this.rfq = param.rfq,
    this.status = param.status,
    this.termin = param.termin,
    this.createdAt =  param.createdAt,
    this.updatedAt = param.updatedAt;
  }

  async viewOneOffer(){
    const param = {'id': this.id};
    const result = await query.findOneOffer(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllOffers(){
    const param = {};
    const result = await query.findAllOffers(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Offer;
