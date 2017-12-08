const mongoose = require("mongoose"),
Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: false
    },
    duration: {
        type: String,
        required: false
    }
})

let Customers = mongoose.model("Customer", CustomerSchema)

module.exports = Customers