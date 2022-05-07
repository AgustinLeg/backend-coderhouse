class Auth {
  login(req, res) {
    const { user } = req.body;
    if (user) {
      req.session.user = user;
      res.redirect("/");
    } else {
      res.send("Usuario o contraseña incorrectos");
    }
  }
  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("Error al cerrar sesión");
      } else {
        res.redirect("/login");
      }
    });
  }
}

module.exports = new Auth();
