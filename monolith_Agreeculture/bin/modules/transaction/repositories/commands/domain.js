// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class Transaction{

  async addNewTransaction(payload){
    const { id } = payload;
    const transaction = await query.findOneTransaction({id});
    if (!transaction.err) {
      return wrapper.error('error', 'transaction already exist');
    }
    const data = [payload];
    let view = model.generalTransaction();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.id_penawaran)){accumulator.id_penawaran = value.id_penawaran;}
      if(!validate.isEmpty(value.status)){accumulator.status = value.status;}
      if(!validate.isEmpty(value.termin)){accumulator.termin = value.termin;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneTransaction(document);
    return result;
  }

  async updateTransaction(params, payload){
    const { id } = payload;
    const transaction = await query.findOneTransaction({id});
    if (transaction.err) {
      return wrapper.error('error', 'transaction not found', 404);
    }
    const data = [payload];
    let view = model.generalTransaction();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.id_penawaran)){accumulator.id_penawaran = value.id_penawaran;}
      if(!validate.isEmpty(value.status)){accumulator.status = value.status;}
      if(!validate.isEmpty(value.termin)){accumulator.termin = value.termin;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneTransaction(params, document);
    return result;
  }

  async deleteTransaction(params){
    const result = await command.deleteOneTransaction(params);
    return result;
  }

}

module.exports = Transaction;
