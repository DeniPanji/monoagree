

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Categories = require('./domain');

const postOneCategories = async (payload) => {
  const categories = new Categories();
  const postCommand = async (payload) => {
    return await categories.addNewCategories(payload);
  };
  return postCommand(payload);
};

const patchOneCategories = async (id, payload) => {
  const categories = new Categories();
  const putCommand = async (id, payload) => {
    return await categories.updateCategories(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneCategories = async (id) => {
  const categories = new Categories();
  const delCommand = async (id) => {
    return await categories.deleteCategories(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneCategories : postOneCategories,
  patchOneCategories : patchOneCategories,
  deleteOneCategories : deleteOneCategories
};
