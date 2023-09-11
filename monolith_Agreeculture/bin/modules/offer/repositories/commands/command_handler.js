

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Offer = require('./domain');

const postOneOffer = async (payload) => {
  const offer = new Offer();
  const postCommand = async (payload) => {
    return await offer.addNewOffer(payload);
  };
  return postCommand(payload);
};

const patchOneOffer = async (id, payload) => {
  const offer = new Offer();
  const putCommand = async (id, payload) => {
    return await offer.updateOffer(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneOffer = async (id) => {
  const offer = new Offer();
  const delCommand = async (id) => {
    return await offer.deleteOffer(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneOffer : postOneOffer,
  patchOneOffer : patchOneOffer,
  deleteOneOffer : deleteOneOffer
};
