const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');
const uuid = require('uuid');
const {Customer} = require('../models');

router.get('/', async (req, res) => {
    try {
        const orders = await Customer.findAll();

        res.json(orders);
    } catch (err) {
        console.log(err);

        const error = Boom.internal(err).output;

        res.status(error.statusCode).json(error.payload);
    }
});

router.post('/', async (req, res) => {
    try {
        const schema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
        });
    
        const {error, value} = schema.validate(req.body);
    
        if (error) {
            throw Boom.badRequest(error);
        }

        const customer = new Customer({id: uuid(), ...value});

        await customer.save();

        res.json(customer);
    } catch (err) {
        console.log(err);

        const error = Boom.internal(err).output;

        res.status(error.statusCode).json(error.payload);
    }
});

module.exports = router;
