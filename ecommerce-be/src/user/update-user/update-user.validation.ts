import Joi from "joi";

export const update_user_body_schema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    email: Joi.string(),
    preferred_language: Joi.string(),
    phone: Joi.string(),
    role: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
})

export const update_user_query_schema = Joi.object({
    token: Joi.string().required()
})