

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Cart = require('./domain');

const postOneCart = async (payload) => {
  const cart = new Cart();
  const postCommand = async (payload) => {
    return await cart.addNewCart(payload);
  };
  return postCommand(payload);
};

const patchOneCart = async (id, payload) => {
  const cart = new Cart();
  const putCommand = async (id, payload) => {
    return await cart.updateCart(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneCart = async (id) => {
  const cart = new Cart();
  const delCommand = async (id) => {
    return await cart.deleteCart(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneCart : postOneCart,
  patchOneCart : patchOneCart,
  deleteOneCart : deleteOneCart
};
