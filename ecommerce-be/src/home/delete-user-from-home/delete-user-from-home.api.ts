
import { HomeUser } from "../../../models/HomeUser.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_user_from_home_permissions } from "./delete-user-from-home.permission";
import { delete_user_from_home_swagger } from "./delete-user-from-home.swagger";
import { delete_user_from_home_body_schema, delete_user_from_home_query_schema } from "./delete-user-from-home.validation";

export let delete_user_from_home = {
    url: '/home/delete-user-from-home',
    method: 'delete',
    permissions: delete_user_from_home_permissions,
    swagger: delete_user_from_home_swagger,
    body_schema: delete_user_from_home_body_schema,
    query_schema: delete_user_from_home_query_schema
}

app.delete(delete_user_from_home.url, async (req: any, res) => {
    try {
        const response = await HomeUser.findByPk(req.query.id)
        if (!response) {
            throw ("User not Found in Home!!")
        }

        const home_user: any = await HomeUser.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "User deleted from Home successfully" })
    } catch (error: any) {
        send_error(res, error)
    }
});