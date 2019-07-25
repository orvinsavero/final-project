const jwt = require('../helpers/jwt.js')
const User = require('../models/user.js')
const Product = require("../models/product.js")

module.exports = {
  Authentication: function (req, res, next){
    let token = req.headers.token
    let decoded = null
    try {
        decoded = jwt.verify(token)
    } catch {
        throw {
            code: 400
        }
    }
    User.findOne({
        email: decoded.email})
    .then((user) => {
        if (user){
            req.decoded = decoded
            next()
        } else {
            throw {
                code: 400
            }
        }
    })
    .catch(next)  
},
  Authorization: function (req, res, next){
    Product.findById(req.params.id)
    .then((result) => {
        if (result.UserId.toString() == req.decoded.id){
            next()
        } else {
            throw {
                code: 401
            }
        }
    })
    .catch(next)
  },
  BidAuthorization: function (req, res, next){
    Product.findById(req.params.id)
    .then((result) => {
        if (result.status == 'false'){
            next()
        } else {
            throw {
                code: 400
            }
        }
    })
    .catch(next)
  }
}

