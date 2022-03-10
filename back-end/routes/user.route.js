const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");

//ROUTES ET CRUD USER
exports.router = (function () {
  //ROUTES
  router.route("/register").post(userCtrl.register);
  router.route("/login").post(userCtrl.login);

  return router;
})();
