
import { Transaction } from "../../../models/Transaction.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_transaction_permissions } from "./update-transaction.permission";
import { update_transaction_swagger } from "./update-transaction.swagger";
import { update_transaction_body_schema, update_transaction_query_schema } from "./update-transaction.validation";

export let update_transaction = {
    url: '/transaction/update-transaction',
    method: 'post',
    permissions: update_transaction_permissions,
    swagger: update_transaction_swagger,
    body_schema: update_transaction_body_schema,
    query_schema: update_transaction_query_schema
}

app.post(update_transaction.url, async (req: any, res) => {
    try {
        const response = await Transaction.findByPk(req.body.id)
        if (!response) {
            throw { code: 404, message: 'Transaction not found' }
        }
        let transaction: any = await Transaction.update(req.body, { where: { id: req.body.id }, returning: true })
        res.json({ code: 200, message: "Transaction updated successfully", data: transaction })
    } catch (error: any) {
        send_error(res, error)
    }
});