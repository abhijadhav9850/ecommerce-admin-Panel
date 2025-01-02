import Joi from "joi";

export const get_logged_in_user_body_schema = Joi.object({
    // phone: Joi.string().min(10).max(10).required()
})

export const get_logged_in_user_query_schema = Joi.object({
   token: Joi.string(),
   id:Joi.number(),
})