import Joi from "joi";

export const create_society_body_schema = Joi.object({
    name: Joi.string().required(),
    street: Joi.string().required(),
    sector: Joi.string().required(),
    town: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    pincode: Joi.string().required()
})

export const create_society_query_schema = Joi.object({
    token: Joi.string().required()
})