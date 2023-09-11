

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Product = require('./domain');

const postOneProduct = async (payload) => {
  const product = new Product();
  const postCommand = async (payload) => {
    return await product.addNewProduct(payload);
  };
  return postCommand(payload);
};

const patchOneProduct = async (id, payload) => {
  const product = new Product();
  const putCommand = async (id, payload) => {
    return await product.updateProduct(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneProduct = async (id) => {
  const product = new Product();
  const delCommand = async (id) => {
    return await product.deleteProduct(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneProduct : postOneProduct,
  patchOneProduct : patchOneProduct,
  deleteOneProduct : deleteOneProduct
};
