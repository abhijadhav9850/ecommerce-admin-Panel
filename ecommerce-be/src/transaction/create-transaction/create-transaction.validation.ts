import Joi from "joi";

export const create_transaction_body_schema = Joi.object({
    account_id: Joi.number().required(),
    sub_head: Joi.string().required(),
    type: Joi.string().required(),
    method: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    head: Joi.string().required()
})

export const create_transaction_query_schema = Joi.object({
    token: Joi.string().required()
})