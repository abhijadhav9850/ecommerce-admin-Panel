import Joi from "joi";

export const building_list_query_schema = Joi.object({
    token: Joi.string().required(),
    page: Joi.number().required(),
    page_size: Joi.number().required()
})