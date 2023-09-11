

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneWishlist = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneWishlist(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getOneWishlist(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const getAllWishlists = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllWishlists(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllWishlists(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneWishlist = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneWishlist(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneWishlist(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const patchOneWishlist = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.ifExistWishlist(payload);
  const patchRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.patchOneWishlist(id, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await patchRequest(validateParam));
};

const deleteOneWishlist = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneWishlist(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneWishlist(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await deleteRequest(validateParam));
};

module.exports = {
  getOneWishlist: getOneWishlist,
  getAllWishlists: getAllWishlists,
  postOneWishlist: postOneWishlist,
  patchOneWishlist: patchOneWishlist,
  deleteOneWishlist: deleteOneWishlist
};
