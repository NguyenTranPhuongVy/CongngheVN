const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
        code: {
            type: String,
            maxlength: 10
        },
        name: {
            type: String,
            maxlength: 200,
            require: true
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        percentDiscount: {
            type: Number,
            maxlenght: 3, 
            default: 0
        },
        view: {
            type: Number,
        },
        describe: {
            type: String,
            maxlength: 500
        },
        content: {
            type: String
        },
        dateCreate: {
            type: Date,
            default: Date.now
        },
        dateModified: {
            type: Date,
            default: Date.now
        },
        userCreate: {
            type: String,
            default: 'Phương Vy'
        },
        userModified: {
            type: String,
            default: 'Phương Vy'
        },
        active: {
            type: Boolean,
            default: true
        },
        bin: {
            type: Boolean,
            default: false
        },
        follow: {
            type: Boolean,
            default: false
        },
        note: {
            type: Boolean,
            default: false
        },
});

module.exports = mongoose.model('Product', Product);