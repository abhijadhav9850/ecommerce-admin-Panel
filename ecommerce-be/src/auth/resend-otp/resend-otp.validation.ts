import Joi from "joi";

export const resend_otp_body_schema = Joi.object({
    phone: Joi.string().min(10).max(10).required()
})