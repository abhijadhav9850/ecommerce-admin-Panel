
import { Otp } from "../../../models/Otp";
import { User } from "../../../models/User.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { sign_in_permissions } from "./sign-in.permission";
import { sign_in_swagger } from "./sign-in.swagger";
import { sign_in_body_schema } from "./sign-in.validation";

export let sign_in = {
    url : '/auth/sign-in',
    method : 'post',
    permissions : sign_in_permissions,
    swagger: sign_in_swagger,
    body_schema : sign_in_body_schema
}
  
app.post(sign_in.url, async (req:any, res) => {
    try {
        let data : any = await User.findOne({where : { phone : req.body.phone } })
        if(!data){
           data = await User.create({phone : req.body.phone, role : User})
        }
        let otp : any = await Otp.create({ type : 'Phone', user_id : data.id, otp : Math.floor(1000 + Math.random() * 9000)  })
        res.json({ message : 'Otp sent successfully', data : { otp_id : otp.id } })
    } catch (error:any) {
        send_error(res,error)
    }
});