const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let contact = new mongoose.Schema({
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			validate: (value) => {
				return validator.isEmail(value)
			}
		},
		name: String,
		message: String,
		

},{timestamps: true},{collection: "contact"});

module.exports = mongoose.model('contact',contact), mongoose.set('useFindAndModify', false)