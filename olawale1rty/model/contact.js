const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let contact = new mongoose.Schema({
		name: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minlength: 5,
    		maxlength: 255,
			lowercase: true,
			validate: (value) => {
				return validator.isEmail(value)
			}
		},
		message: {
		    type: String,
		    required: true,
		    minlength: 50,
		    maxlength: 500
		},
		

},{timestamps: true},{collection: "contact"});

Contact = mongoose.model('contact',contact), mongoose.set('useFindAndModify', false)

function validateUser(user) {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    message: Joi.string().min(50).max(500).required(),
  });

  return schema.validate(user);
}

exports.contact = Contact; 
exports.validateContact = validateUser;