const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let ecxSchema = new mongoose.Schema({
		name: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		username: {
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
		number: {
		    type: Number,
		    required: true,
		    minlength: 13,
		    maxlength: 17
		},
		slackAccount: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		age: {
		    type: Number,
		    required: true,
		    minlength: 1,
		    maxlength: 4
		},
		track: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 255
		},
		institution: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 255
		},
		password: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 255
		},
		isAdmin: Boolean


},{timestamps: true},{collection: "user"});

User = mongoose.model('ecx',ecxSchema), mongoose.set('useFindAndModify', false)

function validateUser(user) {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    username: Joi.string().alphanum().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    number: Joi.number().min(13).required(),
    slackAccount: Joi.string().min(3).max(50).required(),
    age: Joi.number().integer().min(1).required(),
    track: Joi.string().min(3).max(255).required(),
    institution: Joi.string().min(3).max(255).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(3).max(255).required()
  });

  return schema.validate(user)
}

exports.User = User; 
exports.validate = validateUser;