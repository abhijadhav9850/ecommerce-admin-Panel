import Joi from "joi";

export const update_account_body_schema = Joi.object({
    id: Joi.number().required(),
    type: Joi.string().required(),
    account_number: Joi.string().required(),
    ifsc_code: Joi.string().required(),
    bank: Joi.string().required(),
})

export const update_account_query_schema = Joi.object({
    token: Joi.string().required()
})