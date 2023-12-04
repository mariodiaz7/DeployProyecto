const express = require("express");
const router = express.Router(); //Objeto para configurar ruta

const authController = require("../controllers/auth.controller");
const runValidation = require("../validators/index.middleware");
const { registerValidator } = require("../validators/auth.validator");
const { authentication } = require("../middlewares/auth.middlewares");

router.post("/register",
  registerValidator,
  runValidation,
  authController.register
);


router.post("/login", authController.login);

router.get("/whoami", authentication, authController.whoami);


module.exports = router;