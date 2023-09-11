

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Transaction = require('./domain');

const postOneTransaction = async (payload) => {
  const transaction = new Transaction();
  const postCommand = async (payload) => {
    return await transaction.addNewTransaction(payload);
  };
  return postCommand(payload);
};

const patchOneTransaction = async (id, payload) => {
  const transaction = new Transaction();
  const putCommand = async (id, payload) => {
    return await transaction.updateTransaction(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneTransaction = async (id) => {
  const transaction = new Transaction();
  const delCommand = async (id) => {
    return await transaction.deleteTransaction(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneTransaction : postOneTransaction,
  patchOneTransaction : patchOneTransaction,
  deleteOneTransaction : deleteOneTransaction
};
