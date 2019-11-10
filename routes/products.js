const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');
const uuid = require('uuid');
const {Product} = require('../models');

router.post('/', async (req, res) => {
    try {
        const schema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string(),
            price: Joi.number().required(),
        });
    
        const {error, value} = schema.validate(req.body);
    
        if (error) {
            throw Boom.badRequest(error);
        }
    
        const product = new Product({id: uuid(), ...value});
    
        await product.save();
    
        res.json(product);
    } catch (err) {
        console.log(err);

        const error = Boom.internal(err).output;

        res.status(error.statusCode).json(error.payload);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();

        res.json(products);
    } catch (err) {
        console.log(err);

        const error = Boom.internal(err).output;

        res.status(error.statusCode).json(error.payload);
    }
});

module.exports = router;
