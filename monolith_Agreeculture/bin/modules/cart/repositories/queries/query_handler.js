

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Cart = require('./domain');

const getOneCart = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const cart = new Cart(queryParam);
    const result = await cart.viewOneCart();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllCarts = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const cart = new Cart(queryParam);
    const result = await cart.viewAllCarts();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneCart : getOneCart,
  getAllCarts : getAllCarts
};
