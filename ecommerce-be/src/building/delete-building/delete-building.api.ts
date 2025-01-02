
import { Building } from "../../../models/Building.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_building_permissions } from "./delete-building.permission";
import { delete_building_swagger } from "./delete-building.swagger";
import { delete_building_query_schema } from "./delete-building.validation";

export let delete_building = {
    url: '/building/delete-building',
    method: 'delete',
    permissions: delete_building_permissions,
    swagger: delete_building_swagger,
    query_schema: delete_building_query_schema
}

app.delete(delete_building.url, async (req: any, res) => {
    try {
        const response = await Building.findByPk(req.query.id)
        if (!response) {
            throw ({ code: 400, message: "Building not Found!!" })
        }
        const building: any = await Building.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "Building deleted successfully" })
    } catch (error: any) {
        send_error(res, error)
    }
});