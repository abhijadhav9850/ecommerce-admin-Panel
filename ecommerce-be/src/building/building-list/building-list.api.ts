
import { Building } from "../../../models/Building.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { building_list_permissions } from "./building-list.permission";
import { building_list_swagger } from "./building-list.swagger";
import { building_list_query_schema } from "./building-list.validation";

export let building_list = {
    url: '/building/building-list',
    method: 'get',
    permissions: building_list_permissions,
    swagger: building_list_swagger,
    query_schema: building_list_query_schema
}

app.get(building_list.url, async (req: any, res) => {
    try {
        let filter: any = {}
        let pagination: any = {}
        pagination = {
            offset: (req?.query?.page - 1) * req?.query?.page_size,
            limit: req?.query?.page_size
        }
        let building_list = await Building.findAll({ where: filter, ...pagination });
        let buildings = await Building.findAll();
        if (building_list.length > 0) {
            res.json({ count: buildings.length, message: 'Buildings fetched successfully', data: building_list });
        } else {
            res.json({ count: buildings.length, message: 'No records', data: building_list })
        }
    } catch (error: any) {
        send_error(res, error)
    }
});