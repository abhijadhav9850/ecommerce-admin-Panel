
import { Home } from "../../../models/Home.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { home_list_permissions } from "./home-list.permission";
import { home_list_swagger } from "./home-list.swagger";
import { home_list_query_schema } from "./home-list.validation";

export let home_list = {
    url: '/home/home-list',
    method: 'get',
    permissions: home_list_permissions,
    swagger: home_list_swagger,
    query_schema: home_list_query_schema
}

app.get(home_list.url, async (req: any, res) => {
    try {
        let filter: any = {}
        let pagination: any = {}
        pagination = {
            offset: (req?.query?.page - 1) * req?.query?.page_size,
            limit: req?.query?.page_size
        }
        let home_list = await Home.findAll({ where: filter, ...pagination });
        let homes = await Home.findAll();
        if (home_list.length > 0) {
            res.json({ count: homes.length, message: 'Homes fetched successfully', data: home_list });
        } else {
            res.json({ count: homes.length, message: 'No records', data: home_list })
        }
    } catch (error: any) {
        send_error(res, error)
    }
});