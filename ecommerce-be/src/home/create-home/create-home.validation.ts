import Joi from "joi";

export const create_home_body_schema = Joi.object({
    room_no: Joi.string().required(),
    floor: Joi.string().required(),
    wing_id: Joi.number().required(),
})

export const create_home_query_schema = Joi.object({
    token: Joi.string().required()
})