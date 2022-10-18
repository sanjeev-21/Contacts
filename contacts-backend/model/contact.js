const mongoose = require("mongoose");
var Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },    
    email:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: false
    }
});
contactSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Contact", contactSchema)