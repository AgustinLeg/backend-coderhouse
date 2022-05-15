class Auth {
  login(req, res) {
    if (req.isAuthenticated()) {
      const user = req.user;
      console.log("usuario logeado", user);
      res.render("formulario", { user: user.userName });
    } else {
      res.redirect("/login");
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

  signup(req, res) {
    const user = req.body;
    if (user) {
      req.session.user = user;
      res.redirect("/login");
    }
  }
}

module.exports = new Auth();
