

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

class UserCourse{

  async addNewUserCourse(payload){
    const data = [payload];
    let view = model.generalUserCourse();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneUserCourse(document);
    return result;
  }

  async updateUserCourse(params, payload){
    const data = [payload];
    let view = model.generalUserCourse();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneUserCourse(params, document);
    return result;
  }

  async deleteUserCourse(params){
    const result = await command.deleteOneUserCourse(params);
    return result;
  }

}

module.exports = UserCourse;
