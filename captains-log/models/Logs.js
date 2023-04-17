const mongoose = require('mongoose');

//defining the properties of fields which is Schema
//Mongoose Fruit Schema (blueprint)
const logsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken : {type: Boolean, default: true}
}, {timestamps: true})

//Mongoose model
const Logs = mongoose.model('Logs', logsSchema);

//exporting the model
module.exports = Logs;

