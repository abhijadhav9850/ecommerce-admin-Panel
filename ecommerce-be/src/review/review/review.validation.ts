import Joi from "joi";

export const review_body_schema = Joi.object({
    rating: Joi.number().required(),
    review: Joi.string().required(),
    user_id: Joi.number().required()
})

export const review_query_schema = Joi.object({
    token: Joi.string().required(),
})