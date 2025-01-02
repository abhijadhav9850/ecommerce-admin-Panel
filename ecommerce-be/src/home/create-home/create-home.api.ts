
import { Home } from "../../../models/Home.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_home_permissions } from "./create-home.permission";
import { create_home_swagger } from "./create-home.swagger";
import { create_home_body_schema, create_home_query_schema } from "./create-home.validation";

export let create_home = {
    url: '/home/create-home',
    method: 'post',
    permissions: create_home_permissions,
    swagger: create_home_swagger,
    body_schema: create_home_body_schema,
    query_schema: create_home_query_schema
}

app.post(create_home.url, async (req: any, res) => {
    try {
        let home = await Home.create(req.body, { returning: true })
        res.json({ message: "Home Created Successfully", body: home })
    } catch (error: any) {
        send_error(res, error)
    }
});