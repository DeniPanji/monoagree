// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Wishlist = require('./domain');

const getOneWishlist = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const wishlist = new Wishlist(queryParam);
    const result = await wishlist.viewOneWishlist();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllWishlists = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const wishlist = new Wishlist(queryParam);
    const result = await wishlist.viewAllWishlists();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneWishlist : getOneWishlist,
  getAllWishlists : getAllWishlists
};
