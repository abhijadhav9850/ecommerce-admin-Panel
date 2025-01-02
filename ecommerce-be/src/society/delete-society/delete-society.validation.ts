import Joi from "joi";

export const delete_society_query_schema = Joi.object({
    token: Joi.string().required(),
    id: Joi.number().required()
})