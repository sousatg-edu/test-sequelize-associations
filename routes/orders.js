const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');
const uuid = require('uuid');
const {Customer, Product, Order} = require('../models');

router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [{
                model: Product,
                as: 'products',
            },{
                model: Customer,
                as: 'customer',
            }],
        });

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
            address: Joi.string().required(),
            customerId: Joi.string().required(),
        });
    
        const {error, value} = schema.validate(req.body);
    
        if (error) {
            throw Boom.badRequest(error);
        }

        const order = new Order({id: uuid(), ...value});

        await order.save();

        res.json(order);
    } catch (err) {
        console.log(err);

        const error = Boom.internal(err).output;

        res.status(error.statusCode).json(error.payload);
    }
});

module.exports = router;
