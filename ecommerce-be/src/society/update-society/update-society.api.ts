
import { Society } from "../../../models/Society.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_society_permissions } from "./update-society.permission";
import { update_society_swagger } from "./update-society.swagger";
import { update_society_body_schema, update_society_query_schema } from "./update-society.validation";

export let update_society = {
    url: '/society/update-society',
    method: 'post',
    permissions: update_society_permissions,
    swagger: update_society_swagger,
    body_schema: update_society_body_schema,
    query_schema: update_society_query_schema
}

app.post(update_society.url, async (req: any, res) => {
    try {
        let society: any = await Society.update(req.body, { where: { id: req.body.id }, returning: true })
        res.json({ code: 200, message: "Society updated successfully", data: society })
    } catch (error: any) {
        send_error(res, error)
    }
});