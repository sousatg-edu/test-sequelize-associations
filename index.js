const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const products = require('./routes/products');
const productOrders = require('./routes/productOrders');
const orders = require('./routes/orders');
const customers = require('./routes/customers');

app.use(cors());
app.use(bodyParser.json());

app.use('/customers', customers);
app.use('/products', products);
app.use('/productorders', productOrders);
app.use('/orders', orders);

app.listen(8000, _ => console.log('Running...'));
