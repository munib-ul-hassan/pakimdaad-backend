const joi = require('joi');


const loginSchema = joi.object({
  email: joi.string().required().lowercase(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const registerSchema = joi.object({
  firstName: joi.string().required().lowercase(),
  lastName: joi.string().lowercase(),
  email: joi.string().required().lowercase().required().email(),
  password: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .min(4)
    .max(8),
  confirmPassword: joi.ref("password"),
  dateOfBirth: joi.date().required(),
  address: joi.string().required(),
  zipCode: joi.string().max(6).required(),
  city: joi.string().required(),
  country: joi.string(),
  religion: joi.string().max(10),
  create_at: joi.date().default(new Date().toLocaleString()),
  updated_at: joi.date().default(new Date().toLocaleString())
});

module.exports = {
  loginSchema,
  registerSchema,
};
