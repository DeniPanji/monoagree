//const nconf   = require('nconf');
// const apm = require('elastic-apm-node').start({
//   // Override service name from package.json
//   // Allowed characters: a-z, A-Z, 0-9, -, _, and space
//   serviceName: 'courseService',
//   secretToken: 'RkcwNHBvTUJHSVpQaHFFMkhVaHI6a0I4eHFLTGhUZ1NSWXUyUVFUQTF0Zw==',
//   // Set custom APM Server URL (default: http://localhost:8200)
//   serverUrl: 'https://agree-deployment.kb.us-central1.gcp.cloud.es.io:9243',
// });

const restify = require('restify');
//const serveStatic = require('serve-static-restify');
const project = require('../../package.json');
const basicAuth = require('../auth/basic_auth_helper');
// const jwtAuth = require('../auth/jwt_auth_helper');
const wrapper = require('../helpers/utils/wrapper');
// const sentryLog = require('../helpers/components/sentry/sentry_log');
// const logger = require('../helpers/utils/logger');
const corsMiddleware = require('restify-cors-middleware');
const userHandler = require('../modules/user/handlers/api_handler');
const cartHandler = require('../modules/cart/handlers/api_handler');
const transactionHandler = require('../modules/transaction/handlers/api_handler');
const productHandler = require('../modules/product/handlers/api_handler');
const offerHandler = require('../modules/offer/handlers/api_handler');
const wishlistHandler = require('../modules/wishlist/handlers/api_handler');


let crossOrigin = (req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  return next();
};

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept, OPTIONS'],
  exposeHeaders: ['OPTIONS']
});

let AppServer = function(){
  this.server = restify.createServer({
    name: project.name + '-server',
    version: project.version
  });

  this.server.serverKey = '';
  this.server.pre(cors.preflight);
  this.server.use(cors.actual);
  this.server.use(restify.plugins.acceptParser(this.server.acceptable));
  this.server.use(restify.plugins.queryParser());
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.authorizationParser());

  //required for basic auth
  this.server.use(basicAuth.init());
  this.server.use(crossOrigin);

  //anonymous can access the end point, place code bellow
  this.server.get('/', (req, res, next) => {
    wrapper.response(res,'success',wrapper.data('Index'),'This service is running properly');
  });

  //user
  this.server.post('/api/v1/user/', userHandler.postOneUser);
  this.server.get('/api/v1/user/', userHandler.getAllUsers);
  this.server.get('/api/v1/user/:id', userHandler.getOneUser);
  this.server.del('/api/v1/user/:id', userHandler.deleteOneUser);
  this.server.patch('/api/v1/user/:id', userHandler.patchOneUser);

  //cart
  this.server.post('/api/v1/cart/', cartHandler.postOneCart);
  this.server.get('/api/v1/cart/', cartHandler.getAllCarts);
  this.server.get('/api/v1/cart/:id', cartHandler.getOneCart);
  this.server.del('/api/v1/cart/:id', cartHandler.deleteOneCart);
  this.server.patch('/api/v1/cart/:id', cartHandler.patchOneCart);

  //transaction
  this.server.post('/api/v1/transaction/', transactionHandler.postOneTransaction);
  this.server.get('/api/v1/transaction/', transactionHandler.getAllTransactions);
  this.server.get('/api/v1/transaction/:id', transactionHandler.getOneTransaction);
  this.server.del('/api/v1/transaction/:id', transactionHandler.deleteOneTransaction);
  this.server.patch('/api/v1/transaction/:id', transactionHandler.patchOneTransaction);

  //product
  this.server.post('/api/v1/product/', productHandler.postOneProduct);
  this.server.get('/api/v1/product/', productHandler.getAllProducts);
  this.server.get('/api/v1/product/:id', productHandler.getOneProduct);
  this.server.del('/api/v1/product/:id', productHandler.deleteOneProduct);
  this.server.patch('/api/v1/product/:id', productHandler.patchOneProduct);

  //offer
  this.server.post('/api/v1/offer/', offerHandler.postOneOffer);
  this.server.get('/api/v1/offer/', offerHandler.getAllOffers);
  this.server.get('/api/v1/offer/:id', offerHandler.getOneOffer);
  this.server.del('/api/v1/offer/:id', offerHandler.deleteOneOffer);
  this.server.patch('/api/v1/offer/:id', offerHandler.patchOneOffer);

  //wishlist
  this.server.post('/api/v1/wishlist/', wishlistHandler.postOneWishlist);
  this.server.get('/api/v1/wishlist/', wishlistHandler.getAllWishlists);
  this.server.get('/api/v1/wishlist/:id', wishlistHandler.getOneWishlist);
  this.server.del('/api/v1/wishlist/:id', wishlistHandler.deleteOneWishlist);
  this.server.patch('/api/v1/wishlist/:id', wishlistHandler.patchOneWishlist);
};

module.exports = AppServer;
