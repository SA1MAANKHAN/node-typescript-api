import Joi from "joi";

const passwordRegex =
  /^(?=.{6,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

export const signupSchema = Joi.object().keys({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(5).max(15).regex(passwordRegex).required(),
  email: Joi.string().min(3).required().email(),
});

export const giveMarksSchema = Joi.object().keys({
  id: Joi.string(),
  marks: marks.required(),
});

export const loginSchema = Joi.object().keys({
  email: Joi.string().min(3).required().email(),
  password: Joi.string().min(5).max(15).regex(passwordRegex).required(),
});

export const otpSchema = Joi.object().keys({
  email: Joi.string().min(3).required().email(),
  otp: Joi.string().length(6),
});
