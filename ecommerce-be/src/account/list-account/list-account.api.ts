import { Account } from "../../../models/Account.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { list_account_permissions } from "./list-account.permission";
import { list_account_swagger } from "./list-account.swagger";
import { list_account_query_schema } from "./list-account.validation";

export let list_account = {
  url: "/account/list-account",
  method: "get",
  permissions: list_account_permissions,
  swagger: list_account_swagger,
  query_schema: list_account_query_schema,
};

app.get(list_account.url, async (req: any, res) => {
    try {
        let filter: any = {}
        let pagination: any = {}
        pagination = {
            offset: (req?.query?.page - 1) * req?.query?.page_size,
            limit: req?.query?.page_size
        }
        let account_list = await Account.findAll({ where: filter, ...pagination });
        let account = await Account.findAll();
        if (account_list.length > 0) {
            res.json({ count: account.length, message: 'Account fetched successfully', data: account_list });
        } else {
            res.json({ count: account.length, message: 'No records', data: account_list })
        }
    } catch (error: any) {
        send_error(res, error)
    }
});
