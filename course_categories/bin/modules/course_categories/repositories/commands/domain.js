

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

class Categories{

  async addNewCategories(payload){
    const data = [payload];
    let view = model.generalCategories();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneCategories(document);
    return result;
  }

  async updateCategories(params, payload){
    const data = [payload];
    let view = model.generalCategories();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneCategories(params, document);
    return result;
  }

  async deleteCategories(params){
    const result = await command.deleteOneCategories(params);
    return result;
  }

}

module.exports = Categories;
