const homeModel = require('../models/HomeModel');
const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
    const contatos = await Contato.buscContatos();
    res.render('index', { contatos });
    return;
};