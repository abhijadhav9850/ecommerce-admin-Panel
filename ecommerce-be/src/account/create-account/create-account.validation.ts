import Joi from "joi";

export const create_account_body_schema = Joi.object({
    user_id: Joi.number().required(),
    bank: Joi.string().required(),
    account_number: Joi.string().required(),
    ifsc_code: Joi.string().required(),
    type: Joi.string().required()
})

export const create_account_query_schema = Joi.object({
    token: Joi.string().required()
})