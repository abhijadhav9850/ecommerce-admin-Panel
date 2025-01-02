
import { Wing } from "../../../models/Wing.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_wing_permissions } from "./update-wing.permission";
import { update_wing_swagger } from "./update-wing.swagger";
import { update_wing_body_schema, update_wing_query_schema } from "./update-wing.validation";

export let update_wing = {
    url: '/wing/update-wing',
    method: 'post',
    permissions: update_wing_permissions,
    swagger: update_wing_swagger,
    body_schema: update_wing_body_schema,
    query_schema: update_wing_query_schema
}

app.post(update_wing.url, async (req: any, res) => {
    try {
        let response = await Wing.findByPk(req.query.id)
        if (!response) {
            throw ("wing not Found!!")
        }
        let wing = await Wing.update({ name: req.body.name }, { where: { id: req.query.id } })
        res.json({ code: 200, message: "Wing Updated Successfully!", data: wing })
    } catch (error: any) {
        send_error(res, error)
    }
});