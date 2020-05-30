const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const validator = require("validator");
let ObjectId = mongoose.Schema.ObjectId;

let contact = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value);
      },
    },
    message: {
      type: String,
      required: true,
      minlength: 25,
      maxlength: 500,
    },
  },
  { timestamps: true },
  { collection: "contact" }
);

(Contact = mongoose.model("contact", contact)),
  mongoose.set("useFindAndModify", false);

function validateUser(user) {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Name should not be empty!";
              break;
            case "string.min":
              err.message = `Name should have at least ${err.context.limit} characters!`;
              break;
            case "string.max":
              err.message = `Name should have at most ${err.context.limit} characters!`;
              break;
            case "string.base":
              err.message = "Name should be a string.";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Email should not be empty!";
              break;
            case "string.min":
              err.message = `Email should have at least ${err.context.limit} characters!`;
              break;
            case "string.max":
              err.message = `Email should have at most ${err.context.limit} characters!`;
              break;
            case "string.email":
              err.message = `${err.context.value} is not a valid e-mail`;
              break;
            case "string.base":
              err.message = "Email should be a string.";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    message: Joi.string()
      .min(25)
      .max(500)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Message should not be empty!";
              break;
            case "string.min":
              err.message = `Message should have at least ${err.context.limit} characters!`;
              break;
            case "string.max":
              err.message = `Message should have at most ${err.context.limit} characters!`;
              break;
            case "string.base":
              err.message = "Message should be in string.";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
  });

  return schema.validate(user);
}

exports.contact = Contact;
exports.validateContact = validateUser;
