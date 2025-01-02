import Joi from "joi";

export const add_user_to_home_body_schema = Joi.object({
    home_id: Joi.number().required()
})

export const add_user_to_home_query_schema = Joi.object({
    token: Joi.string().required()
})