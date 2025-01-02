import Joi from "joi";

export const delete_employee_body_schema = Joi.object({
    
})

export const delete_employee_query_schema = Joi.object({
    id: Joi.number().required()
})