const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//GET,  rotas da home
route.get('/', homeController.index);

//rotas de login
route.get('/login/index', loginController.index);


//POST
route.post('/login/register', loginController.register);


// exporta para outros arquivos
module.exports = route;
