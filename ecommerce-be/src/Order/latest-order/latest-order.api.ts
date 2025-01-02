import { Op } from "sequelize";
import { Order } from "../../../models/Order.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { latest_order_permissions } from "./latest-order.permission";
import { latest_order_swagger } from "./latest-order.swagger";
import { latest_order_body_schema, latest_order_query_schema } from "./latest-order.validation";

export let latest_order = {
    url: '/order/latest-order',
    method: 'get',
    permissions: latest_order_permissions,
    swagger: latest_order_swagger,
    body_schema: latest_order_body_schema,
    query_schema: latest_order_query_schema
}

app.get(latest_order.url, async (req: any, res: any) => {
    try {
        let user_id = req.user.id;

        let latest_order = await Order.findOne({
            where: { order_by: user_id },
            order: [['createdAt', 'DESC']],
        });

        if (latest_order) {
            if (latest_order.dataValues.status === 'Cancelled' || latest_order.dataValues.status === 'Delivered') {
                let previous_pending_order = await Order.findOne({
                    where: { order_by: user_id, status: { [Op.notIn]: ['Cancelled', 'Delivered'] } },
                    order: [['createdAt', 'DESC']],
                    limit: 1,
                });

                if (previous_pending_order) {
                    res.json({ data: previous_pending_order });
                } else {
                    res.json({ message: 'No previous pending orders found', data: {} });
                }
            } else {
                res.json({ data: latest_order });
            }
        } else {
            res.json({ message: 'No orders found', data: {} });
        }
    } catch (error: any) {
        send_error(res, error);
    }
});
