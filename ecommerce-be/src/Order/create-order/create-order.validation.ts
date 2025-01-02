import Joi from "joi";

export const create_order_body_schema = Joi.object({
    items : Joi.array().items(Joi.object().keys({ product_id : Joi.number(), quantity : Joi.number(), price : Joi.number() })),
    taste : Joi.string().allow(''),
    instructions : Joi.string().allow(''),
    payment_method : Joi.string()
})

export const create_order_query_schema = Joi.object({
    token: Joi.string().required()
})