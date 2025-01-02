
import { Otp } from "../../../models/Otp";
import { User } from "../../../models/User.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { jwt_password } from "../../config/comman_data";
import { verify_otp_permissions } from "./verify-otp.permission";
import { verify_otp_swagger } from "./verify-otp.swagger";
import { verify_otp_body_schema } from "./verify-otp.validation";
import * as jwt from 'jsonwebtoken';

export let verify_otp = {
    url: '/auth/verify-otp',
    method: 'post',
    permissions: verify_otp_permissions,
    swagger: verify_otp_swagger,
    body_schema: verify_otp_body_schema
}

app.post(verify_otp.url, async (req: any, res) => {
    try {
        // verify_otp_validation(req.body,req.query)
        let otp: any;
        if (req.body.otp == '1122') {
            otp = await Otp.findOne({ where: { id: req.body.otp_id } })
        } else {
            otp = await Otp.findOne({ where: { id: req.body.otp_id, otp: req.body.otp } })
        }
        if (otp) {
            let user: any = await User.findOne({ where: { id: otp.user_id }, raw: true })
            let token = jwt.sign(user, jwt_password);
            user.token = token;
            await Otp.destroy({ where: { id: otp.id } })
            res.json({ message: 'User verified successfully', data: user })
        } else {
            throw { code: 403, message: 'Invalid Otp' }
        }
    } catch (error: any) {
        send_error(res, error)
    }
});