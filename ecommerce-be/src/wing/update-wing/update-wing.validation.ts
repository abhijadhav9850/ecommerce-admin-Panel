import Joi from "joi";

export const update_wing_body_schema = Joi.object({
    name: Joi.string().required(),
})

export const update_wing_query_schema = Joi.object({
    token: Joi.string().required(),
    id: Joi.number().required()
})