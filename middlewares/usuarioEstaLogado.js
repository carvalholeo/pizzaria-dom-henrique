function usuarioEstaLogado(req, res, next) {
  if (typeof req.session.usuario === 'undefined') {
    return res.redirect('/usuarios/login');
  }
  next();
}

module.exports = usuarioEstaLogado;
