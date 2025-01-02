
import { employee } from "../../../models/employee.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { delete_employee_permissions } from "./delete-employee.permission";
import { delete_employee_swagger } from "./delete-employee.swagger";
import { delete_employee_body_schema, delete_employee_query_schema } from "./delete-employee.validation";

export let delete_employee = {
    url : '/employee/delete-employee',
    method : 'delete',
    permissions : delete_employee_permissions,
    swagger: delete_employee_swagger,
    body_schema : delete_employee_body_schema,
    query_schema : delete_employee_query_schema
}
  
app.delete(delete_employee.url, async (req:any, res) => {
    try {
        let response = await employee.findByPk(req.query.id)
        if (!response) {
            throw ("employee not Found!!")
        }
        let data = await employee.destroy({ where: { id: req.query.id } });
        res.json({ code: 200, message: "employee Deleted Successfully", data: data })
    } catch (error:any) {
        send_error(res,error)
    }
});