import Joi from "joi";

export const verify_otp_body_schema = Joi.object({
    otp_id: Joi.number(),
    otp : Joi.string().min(4).max(4).required()
})
