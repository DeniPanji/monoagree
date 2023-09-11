

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneTransaction = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneTransaction(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getOneTransaction(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const getAllTransactions = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllTransactions(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllTransactions(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneTransaction = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneTransaction(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneTransaction(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const patchOneTransaction = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.ifExistTransaction(payload);
  const patchRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.patchOneTransaction(id, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await patchRequest(validateParam));
};

const deleteOneTransaction = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneTransaction(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneTransaction(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await deleteRequest(validateParam));
};

module.exports = {
  getOneTransaction: getOneTransaction,
  getAllTransactions: getAllTransactions,
  postOneTransaction: postOneTransaction,
  patchOneTransaction: patchOneTransaction,
  deleteOneTransaction: deleteOneTransaction
};
