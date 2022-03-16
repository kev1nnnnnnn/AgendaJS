exports.middlewareGlobal = (req, res, next) => {
  
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
   
    next();
}

exports.checkCsrfError = (err, req, res, next) => {

    if(err) {
        return res.render('error');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {

    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    //Se o usuário não estiver logado, ele será redirecionado pra fazer login
    if(!req.session.user) {
        req.flash('errors', 'você precisa fazer login');
        req.session.save(() => {
            res.redirect('/');
        });
        return;
    }
    next();
}