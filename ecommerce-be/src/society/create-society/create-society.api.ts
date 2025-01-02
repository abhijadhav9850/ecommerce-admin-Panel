
import { Society } from "../../../models/Society.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_society_permissions } from "./create-society.permission";
import { create_society_swagger } from "./create-society.swagger";
import { create_society_body_schema, create_society_query_schema } from "./create-society.validation";

export let create_society = {
    url: '/society/create-society',
    method: 'post',
    permissions: create_society_permissions,
    swagger: create_society_swagger,
    body_schema: create_society_body_schema,
    query_schema: create_society_query_schema
}

app.post(create_society.url, async (req: any, res) => {
    try {
        let society: any = await Society.create(req.body, { returning: true })
        res.json({ code: 200, message: "Society created successfully", data: society })
    } catch (error: any) {
        send_error(res, error)
    }
});