

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Categories{
  constructor(param){
    this.id = param.id;
    this.name = param.name;
  }

  async viewOneCategories(){
    const param = {'id': this.id};
    const result = await query.findOneCategories(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllCategoriess(){
    const param = {};
    const result = await query.findAllCategoriess(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Categories;
