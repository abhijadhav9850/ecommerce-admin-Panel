import Joi from "joi";

export const change_status_query_schema = Joi.object({
    token: Joi.string().required(),
    order_id: Joi.string().required(),
    status: Joi.string().required().valid(...['Started','Cooked','Packed','Dispatched','Delivered','Cancelled']),
    otp: Joi.string().min(4).max(4),
})