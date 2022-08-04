const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    order_id: {
        required: true,
        type: Number
    },
    item_name: {
        required: true,
        type: String
    },
    cost: {
        required: true,
        type: Number
    },
    order_date: {
        required: true,
        type: Date
    },
    delivery_date: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Data', dataSchema)