import { Order } from "../../../models/Order.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { check_and_verify_otp_if_delivered, check_status_and_send_otp } from "./change-status.actions";
import { change_status_permissions } from "./change-status.permission";
import { change_status_swagger } from "./change-status.swagger";
import { change_status_query_schema } from "./change-status.validation";

export let change_status = {
    url: '/order/change-status',
    method: 'post',
    permissions: change_status_permissions,
    swagger: change_status_swagger,
    query_schema: change_status_query_schema
}

app.post(change_status.url, async (req: any, res) => {
    try {
        const order: any = await Order.findOne({ where: { id: req.query.order_id } });
        change_status_permissions.extras.change_status_as_per_user(req.user.role, req.query.status);
        change_status_permissions.extras.check_status_to_be_changed(req.user.role, order.status, req.query.status);
        await check_status_and_send_otp(req,order,res)
        await check_and_verify_otp_if_delivered(req,order,res)
        order.status = req.query.status;
        await order.save();
        return res.json({ code: 200, message: `Order status changed to ${req.query.status} successfully` });
    } catch (error: any) {
        send_error(res, error)
    }
});
