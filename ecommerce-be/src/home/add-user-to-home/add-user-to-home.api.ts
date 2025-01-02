import { HomeUser } from "../../../models/HomeUser.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { add_user_to_home_permissions } from "./add-user-to-home.permission";
import { add_user_to_home_swagger } from "./add-user-to-home.swagger";
import { add_user_to_home_body_schema, add_user_to_home_query_schema } from "./add-user-to-home.validation";

export let add_user_to_home = {
    url: '/home/add-user-to-home',
    method: 'post',
    permissions: add_user_to_home_permissions,
    swagger: add_user_to_home_swagger,
    body_schema: add_user_to_home_body_schema,
    query_schema: add_user_to_home_query_schema
}

app.post(add_user_to_home.url, async (req: any, res) => {
    try {
        req.body.user_id = req.user.id;
        let home_user = await HomeUser.create(req.body, { returning: true })
        res.json({ message: 'User added to a Home Successfully', data: home_user })
    } catch (error: any) {
        send_error(res, error)
    }
});