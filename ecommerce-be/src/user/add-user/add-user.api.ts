
import { User } from "../../../models/User.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { add_user_permissions } from "./add-user.permission";
import { add_user_swagger } from "./add-user.swagger";
import { add_user_body_schema, add_user_query_schema } from "./add-user.validation";

export let add_user = {
    url : '/user/add-user',
    method : 'get',
    permissions : add_user_permissions,
    swagger: add_user_swagger,
    body_schema : add_user_body_schema,
    query_schema : add_user_query_schema
}
  
app.get(add_user.url, async (req:any, res) => {
    try {
        let data = await User.create(req.body)
        res.json({code : 200, data })
    } catch (error:any) {
        send_error(res,error)
    }
});