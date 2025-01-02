
import { Otp } from "../../../models/Otp";
import { User } from "../../../models/User.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { resend_otp_permissions } from "./resend-otp.permission";
import { resend_otp_swagger } from "./resend-otp.swagger";
import { resend_otp_body_schema } from "./resend-otp.validation";

export let resend_otp = {
    url: '/auth/resend-otp',
    method: 'post',
    permissions: resend_otp_permissions,
    swagger: resend_otp_swagger,
    body_schema: resend_otp_body_schema
}

app.post(resend_otp.url, async (req: any, res) => {
    try {
        let data: any = await User.findOne({ where: { phone: req.body.phone } })
        if (!data) {
            data = await User.create({ phone: req.body.phone, role: User })
        }
        let otp: any = await Otp.create({ type: 'Phone', user_id: data.id, otp: Math.floor(1000 + Math.random() * 9000) })
        res.json({ message: 'Otp sent successfully', data: { otp_id: otp.id } })
    } catch (error: any) {
        send_error(res, error)
    }
});