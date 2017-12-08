const mongoose = require("mongoose"),
Schema = mongoose.Schema;

let OwnerSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: false
    }
})

let Owners = mongoose.model("Owner", OwnerSchema)

module.exports = Owners