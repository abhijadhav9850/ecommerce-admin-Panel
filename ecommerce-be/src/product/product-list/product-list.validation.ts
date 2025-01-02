import Joi from "joi";

export const product_list_body_schema = Joi.object({
    // phone: Joi.string().min(10).max(10).required()
})

export const product_list_query_schema = Joi.object({
    token: Joi.string()
    // phone: Joi.string().min(10).max(10).required()
})