
import { Wing } from "../../../models/Wing.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_wing_permissions } from "./delete-wing.permission";
import { delete_wing_swagger } from "./delete-wing.swagger";
import { delete_wing_body_schema, delete_wing_query_schema } from "./delete-wing.validation";

export let delete_wing = {
    url: '/wing/delete-wing',
    method: 'delete',
    permissions: delete_wing_permissions,
    swagger: delete_wing_swagger,
    body_schema: delete_wing_body_schema,
    query_schema: delete_wing_query_schema
}

app.delete(delete_wing.url, async (req: any, res) => {
    try {
        let response = await Wing.findByPk(req.query.id)
        if (!response) {
            throw ("wing not Found!!")
        }
        let wing = await Wing.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "Wing Deleted Successfully", data: wing })

    } catch (error: any) {
        send_error(res, error)
    }
});