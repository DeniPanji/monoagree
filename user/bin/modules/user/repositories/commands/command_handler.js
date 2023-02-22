

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const User = require('./domain');

const postOneUser = async (payload) => {
  const user = new User();
  const postCommand = async (payload) => {
    return await user.addNewUser(payload);
  };
  return postCommand(payload);
};

const patchOneUser = async (id, payload) => {
  const user = new User();
  const putCommand = async (id, payload) => {
    return await user.updateUser(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneUser = async (id) => {
  const user = new User();
  const delCommand = async (id) => {
    return await user.deleteUser(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneUser : postOneUser,
  patchOneUser : patchOneUser,
  deleteOneUser : deleteOneUser
};
