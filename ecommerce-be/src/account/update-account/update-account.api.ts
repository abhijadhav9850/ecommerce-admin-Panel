
import { Account } from "../../../models/Account.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_account_permissions } from "./update-account.permission";
import { update_account_swagger } from "./update-account.swagger";
import { update_account_body_schema, update_account_query_schema } from "./update-account.validation";

export let update_account = {
    url : '/account/update-account',
    method : 'post',
    permissions : update_account_permissions,
    swagger: update_account_swagger,
    body_schema : update_account_body_schema,
    query_schema : update_account_query_schema
}
  
app.post(update_account.url, async (req:any, res) => {
    try {
        let account: any = await Account.update({
            account_number: req.body.account_number,
            ifsc_code: req.body.ifsc_code,
            bank:req.body.bank,
            type:req.body.type,
        }, {
            where: {
                id: req.body.id
            }
        })
        res.json({ message: "Account Updated Successfully", data:account })
    } catch (error:any) {
        send_error(res,error)
    }
});