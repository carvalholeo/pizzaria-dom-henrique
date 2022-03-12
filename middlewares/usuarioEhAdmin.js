function ehAdmin(req, res, next) {
  const usuario = req.session.usuario;

  if (usuario && usuario.admin) {
    return next();
  }

  delete req.session.usuario;
  
  req.session.destroy(console.log);

  return res.redirect('/usuarios/login')
}

module.exports = ehAdmin;
