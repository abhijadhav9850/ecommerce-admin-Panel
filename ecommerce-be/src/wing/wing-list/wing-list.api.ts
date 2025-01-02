
import { Wing } from "../../../models/Wing.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { wing_list_permissions } from "./wing-list.permission";
import { wing_list_swagger } from "./wing-list.swagger";
import { wing_list_query_schema } from "./wing-list.validation";

export let wing_list = {
    url: '/wing/wing-list',
    method: 'get',
    permissions: wing_list_permissions,
    swagger: wing_list_swagger,
    query_schema: wing_list_query_schema
}

app.get(wing_list.url, async (req: any, res) => {
    try {
        let filter: any = {}
        let pagination: any = {}
        pagination = {
            offset: (req?.query?.page - 1) * req?.query?.page_size,
            limit: req?.query?.page_size
        }
        let wing_list = await Wing.findAll({ where: filter, ...pagination });
        let wing = await Wing.findAll();
        if (wing_list.length > 0) {
            res.json({ count: wing.length, message: 'wing fetched successfully', data: wing_list });
        } else {
            res.json({ count: wing.length, message: 'No records', data: wing_list })
        }
    } catch (error: any) {
        send_error(res, error)
    }
});