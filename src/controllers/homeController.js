const homeModel = require('../models/HomeModel');

exports.index = (req, res) => {
    res.render('index');
    return;
};