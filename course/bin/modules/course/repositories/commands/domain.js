

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

class Course{

  async addNewCourse(payload){
    const data = [payload];
    let view = model.generalCourse();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.course_category_id)){accumulator.course_category_id = value.course_category_id;}
      if(!validate.isEmpty(value.title)){accumulator.title = value.title;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneCourse(document);
    return result;
  }

  async updateCourse(params, payload){
    const data = [payload];
    let view = model.generalCourse();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.course_category_id)){accumulator.course_category_id = value.course_category_id;}
      if(!validate.isEmpty(value.title)){accumulator.title = value.title;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneProduct(params, document);
    return result;
  }

  async deleteCourse(params){
    const result = await command.deleteOneCourse(params);
    return result;
  }

}

module.exports = Course;
