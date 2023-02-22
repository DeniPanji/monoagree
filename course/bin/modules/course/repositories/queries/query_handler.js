

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Course = require('./domain');

const getOneCourse = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const course = new Course(queryParam);
    const result = await course.viewOneCourse();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllCourses = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const course = new Course(queryParam);
    const result = await course.viewAllCourses();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneCourse : getOneCourse,
  getAllCourses : getAllCourses
};
