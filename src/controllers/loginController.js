const Login = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async (req, res) => {
    
    const login = new Login(req.body);
    await login.register();

    //exibir a msg de erro
    if(login.errors.length > 0) {
        req.flash('errors', login.errors);

        req.session.save(() => {
            return res.redirect('/login/index');
        });
        return;
    }

    res.send(login.errors);
    
};