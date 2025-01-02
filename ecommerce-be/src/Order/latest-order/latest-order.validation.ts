import Joi from "joi";

export const latest_order_body_schema = Joi.object({
    // phone: Joi.string().min(10).max(10).required()
})

export const latest_order_query_schema = Joi.object({
    token: Joi.string().required()
})