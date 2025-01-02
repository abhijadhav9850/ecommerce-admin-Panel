
import { Home } from "../../../models/Home.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { remove_home_permissions } from "./remove-home.permission";
import { remove_home_swagger } from "./remove-home.swagger";
import { remove_home_body_schema, remove_home_query_schema } from "./remove-home.validation";

export let remove_home = {
    url: '/home/remove-home',
    method: 'delete',
    permissions: remove_home_permissions,
    swagger: remove_home_swagger,
    body_schema: remove_home_body_schema,
    query_schema: remove_home_query_schema
}

app.delete(remove_home.url, async (req: any, res) => {
    try {
        const respone = await Home.findByPk(req.query.id)
        if (!respone) {
            throw { code: 404, message: "Home not found" }
        }
        const home: any = await Home.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "Home deleted successfully" })
    } catch (error: any) {
        send_error(res, error)
    }
});