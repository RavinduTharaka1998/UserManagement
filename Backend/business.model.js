const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Customers = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    nic: {
        type: String
    },
    phone: {
        type: String
    },
    customer_type: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collation: 'customers'
});

module.exports = mongoose.model('Customers',Customers);