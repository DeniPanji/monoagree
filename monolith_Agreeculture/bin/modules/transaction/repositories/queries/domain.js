// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Transaction{
  constructor(param){
    this.id = param.id,
    this.id_penawaran = param.id_penawaran,
    this.status = param.status,
    this.termin = param.termin,
    this.createdAt =  param.createdAt,
    this.updatedAt = param.updatedAt;
  }

  async viewOneTransaction(){
    const param = {'id': this.id};
    const result = await query.findOneTransaction(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllTransactions(){
    const param = {};
    const result = await query.findAllTransactions(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Transaction;
