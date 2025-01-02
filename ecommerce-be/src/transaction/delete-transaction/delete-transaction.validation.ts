import Joi from "joi";

export const delete_transaction_query_schema = Joi.object({
    id: Joi.number().required(),
    token: Joi.string().required()
})