

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const UserCourse = require('./domain');

const postOneUserCourse = async (payload) => {
  const userCourse = new UserCourse();
  const postCommand = async (payload) => {
    return await userCourse.addNewUserCourse(payload);
  };
  return postCommand(payload);
};

const patchOneUserCourse = async (id, payload) => {
  const userCourse = new UserCourse();
  const putCommand = async (id, payload) => {
    return await userCourse.updateUserCourse(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneUserCourse = async (id) => {
  const userCourse = new UserCourse();
  const delCommand = async (id) => {
    return await userCourse.deleteUserCourse(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneUserCourse : postOneUserCourse,
  patchOneUserCourse : patchOneUserCourse,
  deleteOneUserCourse : deleteOneUserCourse
};
