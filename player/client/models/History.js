const mongoose = require("mongoose"),
Schema = mongoose.Schema;

let HistorySchema = new Schema({
title: {
    type: String,
    required: true,
    unique: true
},
startYear: {
    type: Number,
    required: true
},
endYear: {
    type: Number,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})

let History = mongoose.model("History", HistorySchema);

module.exports = History;