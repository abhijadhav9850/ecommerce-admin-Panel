
import { User } from "../../../models/User.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_user_permissions } from "./update-user.permission";
import { update_user_swagger } from "./update-user.swagger";
import { update_user_body_schema, update_user_query_schema } from "./update-user.validation";

export let update_user = {
    url: '/user/update-user',
    method: 'post',
    permissions: update_user_permissions,
    swagger: update_user_swagger,
    body_schema: update_user_body_schema,
    query_schema: update_user_query_schema
}

app.post(update_user.url, async (req: any, res) => {
    try {
        const user = await User.update({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            preferred_language: req.body.preferred_language,
            role: req.body.role,
            address: req.body.address,
            city: req.body.city,
        }, {
            where: {
                id: req.user.id
            }
        });
        res.json({ code: 200, message: "User updated successfully" })
    } catch (error: any) {
        send_error(res, error)
    }
});