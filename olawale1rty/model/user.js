const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let ecxSchema = new mongoose.Schema({
		firstname: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		lastname: {
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
		password: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 255
		},
		username: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		track: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		age: {
		    type: Number,
		    required: true,
		    minlength: 2,
		},
		institution: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		isAdmin: Boolean


},{timestamps: true},{collection: "user"});

User = mongoose.model('ecx',ecxSchema), mongoose.set('useFindAndModify', false)

function validateUser(user) {
  const schema = Joi.object().keys({
    firstname: Joi.string().min(3).max(50).required(),
    lastname: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(3).max(255).required(),
    confirmPassword: Joi.ref('password'),
    username: Joi.string().alphanum().min(3).max(50).required(),
    track: Joi.string().min(3).max(50).required(),
    age: Joi.number().integer().min(2).required(),
    institution: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(user)
}

exports.User = User; 
exports.validate = validateUser;