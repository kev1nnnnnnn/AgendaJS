const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

//GET,  rotas da home
route.get('/', homeController.index);

// ============= ROTAS DE LOGIN =============
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// ============= ROTAS DE CONTATO =============
route.get('/contato/index',loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, loginController.register);



// exporta para outros arquivos
module.exports = route;
