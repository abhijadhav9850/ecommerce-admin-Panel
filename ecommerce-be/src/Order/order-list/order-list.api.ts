
import { Order } from "../../../models/Order.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { order_list_permissions } from "./order-list.permission";
import { order_list_swagger } from "./order-list.swagger";
import { order_list_body_schema, order_list_query_schema } from "./order-list.validation";

export let order_list = {
    url: '/order/order-list',
    method: 'get',
    permissions: order_list_permissions,
    swagger: order_list_swagger,
    body_schema: order_list_body_schema,
    query_schema: order_list_query_schema
}

app.get(order_list.url, async (req: any, res) => {
    try {

        let filter: any = {}
        let object: any = {}

        if (req.user.role == 'User') {
            filter.order_by = req.user.id
        }
        if (req.query.status) {
            filter.status = req.query.status
        }

        if (req?.query?.page && req?.query?.page_size) {
            object = {
                offset: (req?.query?.page - 1) * req?.query?.page_size,
                limit: req?.query?.page_size
            }
        }

        let orders = await Order.findAll({
            where: filter, ...object
        });

        if (req.user.role != 'User' && req.user.role != 'Admin' && req.user.role != 'Super Admin') {
            orders = orders.map((item: any) => { delete item.otp; return item; })
        }
        res.json(orders.reverse());
    } catch (error: any) {
        send_error(res, error);
    }
});