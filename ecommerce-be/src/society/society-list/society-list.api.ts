
import { Society } from "../../../models/Society.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { society_list_permissions } from "./society-list.permission";
import { society_list_swagger } from "./society-list.swagger";
import { society_list_query_schema } from "./society-list.validation";

export let society_list = {
    url: '/society/society-list',
    method: 'get',
    permissions: society_list_permissions,
    swagger: society_list_swagger,
    query_schema: society_list_query_schema
}

app.get(society_list.url, async (req: any, res) => {
    try {
        let filter: any = {}
        let pagination: any = {}
        pagination = {
            offset: (req?.query?.page - 1) * req?.query?.page_size,
            limit: req?.query?.page_size
        }
        let society_list = await Society.findAll({ where: filter, ...pagination });
        let societies = await Society.findAll();
        if (society_list.length > 0) {
            res.json({ count: societies.length, message: 'Societies fetched successfully', data: society_list });
        } else {
            res.json({ count: societies.length, message: 'No records', data: society_list })
        }
    } catch (error: any) {
        send_error(res, error)
    }
});