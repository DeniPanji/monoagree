

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneCart = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneCart(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getOneCart(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const getAllCarts = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllCarts(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllCarts(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneCart = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneCart(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneCart(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const patchOneCart = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.ifExistCart(payload);
  const patchRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.patchOneCart(id, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await patchRequest(validateParam));
};

const deleteOneCart = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneCart(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneCart(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await deleteRequest(validateParam));
};

module.exports = {
  getOneCart: getOneCart,
  getAllCarts: getAllCarts,
  postOneCart: postOneCart,
  patchOneCart: patchOneCart,
  deleteOneCart: deleteOneCart
};
