const routes = require("express").Router()
const UserController = require("../controllers/user.js")
const { Authentication } = require("../middlewares/auth.js")

routes.post("/signup", UserController.signup)
routes.post("/signin", UserController.signin)
routes.use(Authentication)
routes.get("/user", UserController.findOne)

module.exports = routes