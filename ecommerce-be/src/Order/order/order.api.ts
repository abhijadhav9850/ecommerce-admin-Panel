
import { Order } from "../../../models/Order.model";
import { OrderItem } from "../../../models/OrderItem.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { order_permissions } from "./order.permission";
import { order_swagger } from "./order.swagger";
import { order_query_schema } from "./order.validation";

export let order = {
    url: '/order/order',
    method: 'get',
    permissions: order_permissions,
    swagger: order_swagger,
    query_schema: order_query_schema
}

app.get(order.url, async (req: any, res) => {
    try {
        let order: any = await Order.findOne({ where: { id: req.query.id }, raw: true });
        if (req.user.role == 'User') {
            if (order.order_by != req.user.id) {
                throw { code: 403, message: 'Unauthorized Access' }
            }
        } else {
            delete order.otp;
        }
        if (order) {
            order.items = await OrderItem.findAll({ where: { order_id: order?.id }, raw: true })
            order.total_amount = order.items.reduce((last: any, current: any) => {
                last = last + current.price
                return last
            }, 0)
            res.json({ message: 'Order fetched successfully', data: order });
        } else {
            res.json({ message: 'No Order found', data: {} });
        }
    } catch (error: any) {
        send_error(res, error);
    }
})