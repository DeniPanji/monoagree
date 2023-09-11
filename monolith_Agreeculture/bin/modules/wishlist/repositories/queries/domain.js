// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Wishlist{
  constructor(param){
    this.id = param.id;
    this.buyerId = param.buyerId;
    this.productId = param.productId;
    this.barang = param.barang;
    this.createdAt = param.createdAt;
    this.updatedAt = param.updatedAt;
  }

  async viewOneWishlist(){
    const param = {'id': this.id};
    const result = await query.findOneWishlist(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllWishlists(){
    const param = {};
    const result = await query.findAllWishlists(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Wishlist;
