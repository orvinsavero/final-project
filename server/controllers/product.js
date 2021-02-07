const Product = require("../models/product.js")

class ProductController {
    static create(req, res, next) {
        let newProduct = {
            title: req.body.title,
            created_at: new Date(),
            status: 'false',
            images: req.body.newImages,
            category: req.body.category,
            initialPrice: req.body.initialPrice,
            bidPrices: [],
            details: req.body.details,
            UserId: req.decoded.id
        }
        Product.create(newProduct)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(next)
    }
    static findByUserId(req, res, next) {
        let id = { UserId: req.decoded.id }
        Product.find(id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
        }
    static findById(req, res, next) {
        let id = req.params.id
        let find = {
            _id: id
        }
        Product.findOne(find)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
    }
    static findAll(req, res, next) {
        Product.find()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
        }
    static deleteOne(req, res, next) {
        let id = req.params.id
        Product.deleteOne({
            _id: id
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(next)
    }
    static bidClosed(req, res, next) {
        let id = req.params.id
        let closeProduct = {
            status: true,
        }
        Product.findByIdAndUpdate(id, {$set: closeProduct}, {new: true})
        .then((result) => {
            res.status(201).json(result)
        })
        .catch(next)
    }
    static addBid(req, res, next) {
        let id = req.params.id
        let addBid = {
            bidPrices: req.body.bid,
        }
        Product.findByIdAndUpdate(id, {$push: addBid}, {new: true})
        .then((result) => {
            res.status(201).json(result)
        })
        .catch(next)
    }
}

module.exports = ProductController
