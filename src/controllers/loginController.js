const Login = require('../models/loginModel');

exports.index = (req, res) => {
  //verifica se o usuario está logado
    if(req.session.user) return res.render('login-logado');
    res.render('login');
}

exports.register = async (req, res) => {

    try {

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

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(() => {
            return res.redirect('/login/index');
        });
        
    } catch (e) {
        console.log(e);
        return res.render('error');
    }  
};

exports.login = async (req, res) => {
    try {
      const login = new Login(req.body);
      await login.login();
  
      if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => {
          return res.redirect('/login/index');
        });
        return;
      }
  
      req.flash('success', 'Você entrou no sistema.');
      req.session.user = login.user;
      req.session.save(() => {
        return res.redirect('/login/index');
      });
    } catch(e) {
      console.log(e);
      return res.render('error');
    }
  };

  exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
  }