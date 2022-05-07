const { Router } = require("express");
const Auth = require("../controllers/auth");

const router = Router();

router.post("/login", Auth.login);

router.get("/logout", Auth.logout);

module.exports = router;
