// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class User{
  constructor(param){
    this.id = param.id;
    this.name = param.name;
    this.email = param.email;
    this.password = param.password;
    this.role = param.role;
    this.createdAt = param.createdAt;
    this.updatedAt = param.updatedAt;
  }

  async viewOneUser(){
    const param = {'id': this.id};
    const result = await query.findOneUser(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllUsers(){
    const param = {};
    const result = await query.findAllUsers(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = User;
