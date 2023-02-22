

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Course{
  constructor(param){
    this.id = param.id;
    this.course_category_id = param.course_category_id;
    this.title = param.title;
  }

  async viewOneCourse(){
    const param = {'id': this.id};
    const result = await query.findOneCourse(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllCourses(){
    const param = {};
    const result = await query.findAllCourses(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = Course;
