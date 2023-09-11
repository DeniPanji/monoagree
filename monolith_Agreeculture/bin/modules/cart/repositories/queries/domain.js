// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Cart{
  constructor(param){
    this.id = param.id,
    this.buyerId = param.buyerId,
    this.productId = param.productId,
    this.createdAt =  param.createdAt,
    this.updatedAt = param.updatedAt;
  }

  async viewOneCart(){
    const param = {'id': this.id};
    const result = await query.findOneCart(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllCarts(){
    const param = {};
    const result = await query.findAllCarts(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Cart;
