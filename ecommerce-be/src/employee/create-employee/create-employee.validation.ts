import Joi from "joi";

export const create_employee_body_schema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    address: Joi.string(),
    phone: Joi.number(),
})

export const create_employee_query_schema = Joi.object({
    
})