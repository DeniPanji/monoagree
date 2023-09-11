

// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Offer = require('./domain');

const getOneOffer = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const offer = new Offer(queryParam);
    const result = await offer.viewOneOffer();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllOffers = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const offer = new Offer(queryParam);
    const result = await offer.viewAllOffers();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneOffer : getOneOffer,
  getAllOffers : getAllOffers
};
