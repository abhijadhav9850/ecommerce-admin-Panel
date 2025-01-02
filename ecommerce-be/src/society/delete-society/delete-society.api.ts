
import { Society } from "../../../models/Society.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_society_permissions } from "./delete-society.permission";
import { delete_society_swagger } from "./delete-society.swagger";
import { delete_society_query_schema } from "./delete-society.validation";

export let delete_society = {
    url: '/society/delete-society',
    method: 'delete',
    permissions: delete_society_permissions,
    swagger: delete_society_swagger,
    query_schema: delete_society_query_schema
}

app.delete(delete_society.url, async (req: any, res) => {
    try {
        const respone = await Society.findByPk(req.query.id)
        if (!respone) {
            throw { code: 404, message: "Society not found" }
        }
        const society: any = await Society.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "Society deleted successfully" })
    } catch (error: any) {
        send_error(res, error)
    }
});