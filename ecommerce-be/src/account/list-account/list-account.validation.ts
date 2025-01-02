import Joi from "joi";

export const list_account_query_schema = Joi.object({
    token: Joi.string().required(),
    page: Joi.number(),
    page_size: Joi.number()
})