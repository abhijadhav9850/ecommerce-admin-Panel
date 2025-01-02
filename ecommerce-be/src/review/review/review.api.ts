
import { Review } from "../../../models/Review.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { review_permissions } from "./review.permission";
import { review_swagger } from "./review.swagger";
import { review_body_schema, review_query_schema } from "./review.validation";

export let review = {
    url: '/review/review',
    method: 'post',
    permissions: review_permissions,
    swagger: review_swagger,
    body_schema: review_body_schema,
    query_schema: review_query_schema
}

app.post(review.url, async (req: any, res) => {
    try {
        let review: any = await Review.create(req.body, { returning: true })
        res.json({ code: 200, message: "Review created successfully" })
    } catch (error: any) {
        send_error(res, error)
    }
});