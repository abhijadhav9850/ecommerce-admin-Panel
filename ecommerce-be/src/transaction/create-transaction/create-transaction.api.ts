
import { Transaction } from "../../../models/Transaction.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_transaction_permissions } from "./create-transaction.permission";
import { create_transaction_swagger } from "./create-transaction.swagger";
import { create_transaction_body_schema, create_transaction_query_schema } from "./create-transaction.validation";

export let create_transaction = {
    url: '/transaction/create-transaction',
    method: 'post',
    permissions: create_transaction_permissions,
    swagger: create_transaction_swagger,
    body_schema: create_transaction_body_schema,
    query_schema: create_transaction_query_schema
}

app.post(create_transaction.url, async (req: any, res) => {
    try {
        let transaction: any = await Transaction.create(req.body, { returning: true })
        res.json({ code: 200, message: "Transaction created successfully"})
    } catch (error: any) {
        send_error(res, error)
    }
});