
import { Wing } from "../../../models/Wing.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_wing_permissions } from "./create-wing.permission";
import { create_wing_swagger } from "./create-wing.swagger";
import { create_wing_body_schema, create_wing_query_schema } from "./create-wing.validation";

export let create_wing = {
    url: '/wing/create-wing',
    method: 'post',
    permissions: create_wing_permissions,
    swagger: create_wing_swagger,
    body_schema: create_wing_body_schema,
    query_schema: create_wing_query_schema
}

app.post(create_wing.url, async (req: any, res) => {
    try {
        let wing = await Wing.create(req.body, { raw: true })
        res.json({ code: 200, message: "Wing Created Successfully", data: wing })
    } catch (error: any) {
        send_error(res, error)
    }
});