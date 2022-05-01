const mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: 'this field is required '
    },
    lastname:{
        type: String,
        required: 'this field is required' 
    },
    email:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    password:{
        type: String
    }

});
// Custom validation for email
customerSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Customer', customerSchema);
