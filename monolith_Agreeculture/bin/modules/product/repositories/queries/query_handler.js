

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Product = require('./domain');

const getOneProduct = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const product = new Product(queryParam);
    const result = await product.viewOneProduct();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllProducts = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const product = new Product(queryParam);
    const result = await product.viewAllProducts();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneProduct : getOneProduct,
  getAllProducts : getAllProducts
};
