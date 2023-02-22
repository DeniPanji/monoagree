

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const UserCourse = require('./domain');

const getOneUserCourse = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const userCourse = new UserCourse(queryParam);
    const result = await userCourse.viewOneUserCourse();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllUserCourses = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const userCourse = new UserCourse(queryParam);
    const result = await userCourse.viewAllUserCourses();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneUserCourse : getOneUserCourse,
  getAllUserCourses : getAllUserCourses
};
