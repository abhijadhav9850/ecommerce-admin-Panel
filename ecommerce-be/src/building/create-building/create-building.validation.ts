import Joi from "joi";

export const create_building_body_schema = Joi.object({
    name: Joi.string().required(),
    society_id: Joi.number().required()
})

export const create_building_query_schema = Joi.object({
    token: Joi.string().required()
})