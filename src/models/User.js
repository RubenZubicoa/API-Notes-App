const { Schema, model } = require('mongoose');

const userschema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
        timestamps: true
    })

module.exports = model('user', userschema);