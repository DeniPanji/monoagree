

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Course = require('./domain');

const postOneCourse = async (payload) => {
  const course = new Course();
  const postCommand = async (payload) => {
    return await course.addNewCourse(payload);
  };
  return postCommand(payload);
};

const patchOneCourse = async (id, payload) => {
  const course = new Course();
  const putCommand = async (id, payload) => {
    return await course.updateCourse(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneCourse = async (id) => {
  const course = new Course();
  const delCommand = async (id) => {
    return await course.deleteCourse(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneCourse : postOneCourse,
  patchOneCourse : patchOneCourse,
  deleteOneCourse : deleteOneCourse
};
