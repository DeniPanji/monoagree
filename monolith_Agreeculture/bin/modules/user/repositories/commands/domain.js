// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
// const query = require('../queries/query');
// const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class User{

  async addNewUser(payload){
    const data = [payload];
    let view = model.generalUser();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
      if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
      if(!validate.isEmpty(value.role)){accumulator.role = value.role;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneUser(document);
    return result;
  }

  async updateUser(params, payload){
    const data = [payload];
    let view = model.generalUser();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
      if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
      if(!validate.isEmpty(value.role)){accumulator.role = value.role;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneUser(params, document);
    return result;
  }

  async deleteUser(params){
    const result = await command.deleteOneUser(params);
    return result;
  }

}

module.exports = User;
