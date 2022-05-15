const { Router } = require("express");
const Auth = require("../controllers/auth");
const passport = require("../utils/passport.util");

const router = Router();

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/failLogin" }),
  Auth.login
);

router.get("/logout", Auth.logout);

router.post(
  "/signup",
  passport.authenticate("signup", { failureRedirect: "/failSignup" }),
  Auth.signup
);

module.exports = router;
