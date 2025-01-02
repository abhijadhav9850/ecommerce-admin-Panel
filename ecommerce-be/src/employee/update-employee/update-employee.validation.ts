import Joi from "joi";

export const update_employee_body_schema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
})

export const update_employee_query_schema = Joi.object({
    id: Joi.number().required()
})