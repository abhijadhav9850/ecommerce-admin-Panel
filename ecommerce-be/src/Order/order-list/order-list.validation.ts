import Joi from "joi";

export const order_list_body_schema = Joi.object({
    // phone: Joi.string().min(10).max(10).required()
})

export const order_list_query_schema = Joi.object({
    token: Joi.string(),
    status: Joi.string(),
    page: Joi.number(),
    page_size:Joi.number()
})