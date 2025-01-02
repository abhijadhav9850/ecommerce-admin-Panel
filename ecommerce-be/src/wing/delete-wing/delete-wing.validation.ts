import Joi from "joi";

export const delete_wing_body_schema = Joi.object({
})

export const delete_wing_query_schema = Joi.object({
    token: Joi.string().required(),
    id: Joi.number().required()
})