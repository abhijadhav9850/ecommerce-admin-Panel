import Joi from "joi";

export const transaction_list_query_schema = Joi.object({
    token: Joi.string().required(),
    page: Joi.number(),
    page_size: Joi.number()
})