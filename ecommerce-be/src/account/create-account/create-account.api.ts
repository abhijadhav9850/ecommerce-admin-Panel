import { Account } from "../../../models/Account.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_account_permissions } from "./create-account.permission";
import { create_account_swagger } from "./create-account.swagger";
import {
  create_account_body_schema,
  create_account_query_schema,
} from "./create-account.validation";

export let create_account = {
  url: "/account/create-account",
  method: "post",
  permissions: create_account_permissions,
  swagger: create_account_swagger,
  body_schema: create_account_body_schema,
  query_schema: create_account_query_schema,
};

app.post(create_account.url, async (req: any, res) => {
  try {
    let account: any = await Account.create(req.body, {
      raw: true,
      returning: true,
    });
    res.json({
      code: 200,
      message: "Account Created Successfully.",
      data: account,
    });
  } catch (error: any) {
    send_error(res, error);
  }
});
