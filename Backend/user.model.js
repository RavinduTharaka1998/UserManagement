const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Users = new Schema({
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
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collation: 'users'
});

module.exports = mongoose.model('Users',Users);