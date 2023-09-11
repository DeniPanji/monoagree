

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneProduct = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneProduct(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getOneProduct(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const getAllProducts = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllProducts(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllProducts(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneProduct = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneProduct(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneProduct(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const patchOneProduct = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.ifExistProduct(payload);
  const patchRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.patchOneProduct(id, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await patchRequest(validateParam));
};

const deleteOneProduct = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneProduct(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneProduct(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await deleteRequest(validateParam));
};

module.exports = {
  getOneProduct: getOneProduct,
  getAllProducts: getAllProducts,
  postOneProduct: postOneProduct,
  patchOneProduct: patchOneProduct,
  deleteOneProduct: deleteOneProduct
};
