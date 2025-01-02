
import { Transaction } from "../../../models/Transaction.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { transaction_list_permissions } from "./transaction-list.permission";
import { transaction_list_swagger } from "./transaction-list.swagger";
import { transaction_list_query_schema } from "./transaction-list.validation";

export let transaction_list = {
    url: '/transaction/transaction-list',
    method: 'get',
    permissions: transaction_list_permissions,
    swagger: transaction_list_swagger,
    query_schema: transaction_list_query_schema
}

app.get(transaction_list.url, async (req: any, res) => {
    try {
        let filter: any = {}
        let pagination: any = {}
        pagination = {
            offset: (req?.query?.page - 1) * req?.query?.page_size,
            limit: req?.query?.page_size
        }
        let transaction_list = await Transaction.findAll({ where: filter, ...pagination });
        let transactions = await Transaction.findAll();
        if (transaction_list.length > 0) {
            res.json({ count: transactions.length, message: 'Transaction fetched successfully', data: transaction_list });
        } else {
            res.json({ count: transactions.length, message: 'No records', data: transaction_list })
        }
    } catch (error: any) {
        send_error(res, error)
    }
});