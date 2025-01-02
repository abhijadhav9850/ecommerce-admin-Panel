
import { Building } from "../../../models/Building.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_building_permissions } from "./create-building.permission";
import { create_building_swagger } from "./create-building.swagger";
import { create_building_body_schema, create_building_query_schema } from "./create-building.validation";

export let create_building = {
    url: '/building/create-building',
    method: 'post',
    permissions: create_building_permissions,
    swagger: create_building_swagger,
    body_schema: create_building_body_schema,
    query_schema: create_building_query_schema
}

app.post(create_building.url, async (req: any, res) => {
    try {
        let building = await Building.create(req.body, { returning: true })
        res.json({ message: "Building created Successfully!", data: building })
    } catch (error: any) {
        send_error(res, error)
    }
});