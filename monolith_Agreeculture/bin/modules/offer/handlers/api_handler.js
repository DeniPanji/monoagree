

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
//const run = require('../../../../producer');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneOffer = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneOffer(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getOneOffer(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
    //run(result);
  };

  sendResponse(await getRequest(validateParam));
};


const getAllOffers = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllOffers(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllOffers(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneOffer = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneOffer(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneOffer(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const patchOneOffer = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.ifExistOffer(payload);
  const patchRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.patchOneOffer(id, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await patchRequest(validateParam));
};

const deleteOneOffer = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneOffer(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneOffer(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await deleteRequest(validateParam));
};

module.exports = {
  getOneOffer: getOneOffer,
  getAllOffers: getAllOffers,
  postOneOffer: postOneOffer,
  patchOneOffer: patchOneOffer,
  deleteOneOffer: deleteOneOffer
};
