const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const carsSchema = new Schema({

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: { createdAt: "created_at"}});

module.exports = new Model('Cars', carsSchema);