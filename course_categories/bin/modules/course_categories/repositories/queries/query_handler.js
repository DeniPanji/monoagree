

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Categories = require('./domain');

const getOneCategories = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const categories = new Categories(queryParam);
    const result = await categories.viewOneCategories();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllCategoriess = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const categories = new Categories(queryParam);
    const result = await categories.viewAllCategoriess();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneCategories : getOneCategories,
  getAllCategoriess : getAllCategoriess
};
