import Joi from "joi";

export const get_employee_body_schema = Joi.object({
   
})

export const get_employee_query_schema = Joi.object({
    id: Joi.number().required()
})