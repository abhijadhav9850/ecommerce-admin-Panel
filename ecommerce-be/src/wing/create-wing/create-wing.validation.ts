import Joi from "joi";

export const create_wing_body_schema = Joi.object({
    building_id: Joi.number().required(),
    name: Joi.string().required(),

})

export const create_wing_query_schema = Joi.object({
    token: Joi.string().required()
})