const User = require("../models/user.js")
const register = require('../helpers/bcrypt.js');
const jwt = require('../helpers/jwt.js');

class UserController{
    static signup(req,res,next){
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            balance: 0,
            history: [],
        }
        User.create(newUser)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch(next)
    }
    static signin(req,res,next){
        let email = req.body.email
        let password = req.body.password
        User.findOne({
            email: email
        })
        .then((result) => {
            if (result){
                let check = register.checkPassword(password, result.password)
                if (check == true){
                    let userSign = {
                        id: result._id,
                        email: result.email
                    }
                    let signed = jwt.sign(userSign)
                    let token = {
                        token: signed
                    }
                    res.status(200).json(token)
                } else {
                    throw {
                        name: `ValidationError`,
                        message: `Invalid email or password`
                    }
                }
            } else {
                throw {
                    name: `ValidationError`,
                    message: `Invalid email or password`
                }
            }
        })
        .catch(next)
    }
    static findOne(req,res,next){
        let email = req.decoded.email
        User.findOne({
            email: email
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(next)
    }
}

module.exports = UserController