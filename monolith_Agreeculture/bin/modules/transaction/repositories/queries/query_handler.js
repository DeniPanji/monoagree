

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Transaction = require('./domain');

const getOneTransaction = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const transaction = new Transaction(queryParam);
    const result = await transaction.viewOneTransaction();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllTransactions = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const transaction = new Transaction(queryParam);
    const result = await transaction.viewAllTransactions();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneTransaction : getOneTransaction,
  getAllTransactions : getAllTransactions
};
