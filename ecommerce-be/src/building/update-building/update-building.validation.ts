import Joi from "joi";

export const update_building_body_schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    society_id: Joi.number().required()
})

export const update_building_query_schema = Joi.object({
    token: Joi.string().required(),
})