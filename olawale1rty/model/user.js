const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let ecxSchema = new mongoose.Schema({
		name: String,
		username: String,
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			validate: (value) => {
				return validator.isEmail(value)
			}
		},
		number: Number,
		slackAccount: String,
		age: Number,
		track: String,
		institution: String,
		password: String,


},{timestamps: true},{collection: "user"});

module.exports = mongoose.model('ecx',ecxSchema), mongoose.set('useFindAndModify', false)