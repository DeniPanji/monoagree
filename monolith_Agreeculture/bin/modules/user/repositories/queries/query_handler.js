// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const User = require('./domain');

const getOneUser = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const user = new User(queryParam);
    const result = await user.viewOneUser();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllUsers = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const user = new User(queryParam);
    const result = await user.viewAllUsers();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneUser : getOneUser,
  getAllUsers : getAllUsers
};
