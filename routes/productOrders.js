const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');
const uuid = require('uuid');
const {ProductOrder} = require('../models');

router.post('/', async (req, res) => {
    try {
        const schema = Joi.object({
            orderId: Joi.string().required(),
            productId: Joi.string().required(),
            quantity: Joi.number().required(),
        });
    
        const {error, value} = schema.validate(req.body);

        if (error) {
            throw Boom.badRequest(error);
        }

        const productOrder = new ProductOrder({id: uuid(), ...value});

        await productOrder.save();

        res.json(productOrder);
    } catch (err) {
        console.log(err);

        const error = Boom.internal(err).output;

        res.status(error.statusCode).json(error.payload);
    }
});

module.exports = router;