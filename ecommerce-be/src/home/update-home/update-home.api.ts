import { Home } from "../../../models/Home.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_home_permissions } from "./update-home.permission";
import { update_home_swagger } from "./update-home.swagger";
import { update_home_body_schema, update_home_query_schema } from "./update-home.validation";

export let update_home = {
    url: '/home/update-home',
    method: 'post',
    permissions: update_home_permissions,
    swagger: update_home_swagger,
    body_schema: update_home_body_schema,
    query_schema: update_home_query_schema
}

app.post(update_home.url, async (req: any, res) => {
    try {
        let res: any = await Home.findByPk(req.query.id)
        if (!res) {
            throw ("Home NOt Found !")
        }
        let home: any = await Home.update({
            room_no: req.body.room_no,
            floor: req.body.floor,
            wing_id: req.body.floor,
        }, {
            where: {
                id: req.query.id
            }
        })
        res.json({ message: "Home updated successfully", data: home })
    } catch (error: any) {
        send_error(res, error)
    }
});