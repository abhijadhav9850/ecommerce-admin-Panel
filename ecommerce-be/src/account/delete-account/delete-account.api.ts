import { Account } from "../../../models/Account.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_account_permissions } from "./delete-account.permission";
import { delete_account_swagger } from "./delete-account.swagger";
import { delete_account_query_schema } from "./delete-account.validation";

export let delete_account = {
  url: "/account/delete-account",
  method: "delete",
  permissions: delete_account_permissions,
  swagger: delete_account_swagger,
  query_schema: delete_account_query_schema,
};

app.delete(delete_account.url, async (req: any, res) => {
  try {
    const response = await Account.findByPk(req.query.id);
    if (!response) {
      throw { code: 400, message: "Account Not Found" };
    }
    let deleted_account = await Account.destroy({
      where: { id: req.query.id },
    });
    res.json({ code: 200, message: "Account Deleted Seccessfully." });
  } catch (error: any) {
    send_error(res, error);
  }
});
