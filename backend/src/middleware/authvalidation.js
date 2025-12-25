const Joi = require("joi");
const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    regNumber: Joi.string().min(3).required(),
    year: Joi.string().min(1).required(),
    branch: Joi.string().min(2).required(),
    password: Joi.string().min(4).required()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();

}

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    regNumber: Joi.string().min(3).required(),
    password: Joi.string().min(4).required()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

module.exports = { registerValidation, loginValidation }