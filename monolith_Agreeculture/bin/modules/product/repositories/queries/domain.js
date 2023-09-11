// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Product{
  constructor(param){
    this.id = param.id;
    this.sellerId = param.sellerId;
    this.name = param.name;
    this.price = param.price;
    this.stock = param.stock;
    this.category = param.category;
    this.brand = param.brand;
    this.detail = param.detail;
    this.createdAt =  param.createdAt;
    this.updatedAt = param.updatedAt;
  }

  async viewOneProduct(){
    const param = {'id': this.id};
    const result = await query.findOneProduct(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllProducts(){
    const param = {};
    const result = await query.findAllProducts(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Product;
