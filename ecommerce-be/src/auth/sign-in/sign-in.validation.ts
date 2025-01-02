import Joi from "joi";

export const sign_in_body_schema = Joi.object({
    phone: Joi.string().min(10).max(10).required()
})
