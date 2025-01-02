import Joi from "joi";

export const add_user_body_schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().email().required(),
    role: Joi.string().min(10).max(10).required()
})

export const add_user_query_schema = Joi.object({
    // phone: Joi.string().min(10).max(10).required()
})