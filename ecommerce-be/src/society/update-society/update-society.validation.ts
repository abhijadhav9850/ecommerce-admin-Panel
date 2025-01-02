import Joi from "joi";

export const update_society_body_schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    street: Joi.string().required(),
    sector: Joi.string().required(),
    town: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    pincode: Joi.string().required()
})

export const update_society_query_schema = Joi.object({
    token: Joi.string().required()
})