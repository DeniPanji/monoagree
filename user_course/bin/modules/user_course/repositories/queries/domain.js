

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class UserCourse{
  constructor(param){
    this.id = param.id;
    this.users_id = param.users_id;
    this.course_id = param.course_id;
  }

  async viewOneUserCourse(){
    const param = {'id': this.id};
    const result = await query.findOneUserCourse(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllUserCourses(){
    const param = {};
    const result = await query.findAllUserCourses(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

}

module.exports = UserCourse;
