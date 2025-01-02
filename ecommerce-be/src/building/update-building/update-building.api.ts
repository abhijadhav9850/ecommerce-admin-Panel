import { Building } from "../../../models/Building.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_building_permissions } from "./update-building.permission";
import { update_building_swagger } from "./update-building.swagger";
import { update_building_body_schema, update_building_query_schema } from "./update-building.validation";

export let update_building = {
    url: '/building/update-building',
    method: 'post',
    permissions: update_building_permissions,
    swagger: update_building_swagger,
    body_schema: update_building_body_schema,
    query_schema: update_building_query_schema
}

app.post(update_building.url, async (req: any, res) => {
    try {
        const response = await Building.findByPk(req.body.id)
        if (!response) {
            throw ({ code: 400, message: "Building not Found!!" })
        }
        let building = await Building.update(req.body, { where: { id: req.body.id }, returning: true })
        res.json({ message: "Building Updated Successfully!", data: building })
    } catch (error: any) {
        send_error(res, error)
    }
});