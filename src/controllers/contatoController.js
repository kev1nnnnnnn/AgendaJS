const Contato = require('../models/ContatoModel');
 
exports.index = (req, res) =>{
  res.render('contato', {
    contato: {}
  });
};
 
exports.register = async(req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato/index'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    return res.render('error');
  }
};

//editar usuario
exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('error');

  const contato = await Contato.buscaPorId(req.params.id);
  if(!contato) return res.render('error');

  res.render('contato', { contato });
};

exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('error');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato/index'));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};

//excluir contato
exports.delete = async  (req, res) => {

  if(!req.params.id) return res.render('error');

  const contato = await Contato.delete(req.params.id);
  if(!contato) return res.render('error');
  
  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect('/'));
  
  return;
};

