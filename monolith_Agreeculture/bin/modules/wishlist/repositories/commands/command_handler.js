

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Wishlist = require('./domain');

const postOneWishlist = async (payload) => {
  const wishlist = new Wishlist();
  const postCommand = async (payload) => {
    return await wishlist.addNewWishlist(payload);
  };
  return postCommand(payload);
};

const patchOneWishlist = async (id, payload) => {
  const wishlist = new Wishlist();
  const putCommand = async (id, payload) => {
    return await wishlist.updateWishlist(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneWishlist = async (id) => {
  const wishlist = new Wishlist();
  const delCommand = async (id) => {
    return await wishlist.deleteWishlist(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneWishlist : postOneWishlist,
  patchOneWishlist : patchOneWishlist,
  deleteOneWishlist : deleteOneWishlist
};
