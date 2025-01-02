
import { employee } from "../../../models/employee.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { update_employee_permissions } from "./update-employee.permission";
import { update_employee_swagger } from "./update-employee.swagger";
import { update_employee_body_schema, update_employee_query_schema } from "./update-employee.validation";

export let update_employee = {
    url : '/employee/update-employee',
    method : 'post',
    permissions : update_employee_permissions,
    swagger: update_employee_swagger,
    body_schema : update_employee_body_schema,
    query_schema : update_employee_query_schema
}
  
app.post(update_employee.url, async (req:any, res) => {
    try {
        let response = await employee.findByPk(req.query.id)
        if (!response) {
            throw ("employee not Found!!")
        }
        let data = await employee.update(req.body , { where: { id: req.query.id } })
        res.json({ code: 200, message: "employee Updated Successfully!", data: data })
    } catch (error:any) {
        send_error(res,error)
        
    }
});