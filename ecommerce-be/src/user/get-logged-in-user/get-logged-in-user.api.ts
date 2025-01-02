
import { User } from "../../../models/User.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { get_logged_in_user_permissions } from "./get-logged-in-user.permission";
import { get_logged_in_user_swagger } from "./get-logged-in-user.swagger";
import { get_logged_in_user_body_schema, get_logged_in_user_query_schema } from "./get-logged-in-user.validation";

export let get_logged_in_user = {
    url: '/user/get-logged-in-user',
    method: 'get',
    permissions: get_logged_in_user_permissions,
    swagger: get_logged_in_user_swagger,
    body_schema: get_logged_in_user_body_schema,
    query_schema: get_logged_in_user_query_schema
}

app.get(get_logged_in_user.url, async (req: any, res) => {
    const logged_in_user_id = req.user.id;
    try {
        const logged_in_user = await User.findByPk(logged_in_user_id);
        if (!logged_in_user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(logged_in_user);
    } catch (error: any) {
        send_error(res, error);
    }
});