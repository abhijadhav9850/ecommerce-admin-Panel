import Joi from "joi";

export const remove_home_body_schema = Joi.object({
    // phone: Joi.string().min(10).max(10).required()
})

export const remove_home_query_schema = Joi.object({
    token: Joi.string().required(),
    id:Joi.number().required(),
})