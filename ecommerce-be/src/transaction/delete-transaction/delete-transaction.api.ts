
import { Transaction } from "../../../models/Transaction.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_transaction_permissions } from "./delete-transaction.permission";
import { delete_transaction_swagger } from "./delete-transaction.swagger";
import { delete_transaction_query_schema } from "./delete-transaction.validation";

export let delete_transaction = {
    url: '/transaction/delete-transaction',
    method: 'delete',
    permissions: delete_transaction_permissions,
    swagger: delete_transaction_swagger,
    query_schema: delete_transaction_query_schema
}

app.delete(delete_transaction.url, async (req: any, res) => {
    try {
        const response = await Transaction.findByPk(req.query.id)
        if (!response) {
            throw { code: 404, message: 'Transation not found' }
        }
        const transaction: any = await Transaction.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "Transaction deleted successfully", data:transaction })
    } catch (error: any) {
        send_error(res, error)
    }
});