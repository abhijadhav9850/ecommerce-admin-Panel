
import { employee } from "../../../models/employee.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { get_employee_permissions } from "./get-employee.permission";
import { get_employee_swagger } from "./get-employee.swagger";
import { get_employee_body_schema, get_employee_query_schema } from "./get-employee.validation";

export let get_employee = {
    url : '/employee/get-employee',
    method : 'get',
    permissions : get_employee_permissions,
    swagger: get_employee_swagger,
    body_schema : get_employee_body_schema,
    query_schema : get_employee_query_schema
}
  
app.get(get_employee.url, async (req:any, res) => {
    try {
        let data = await employee.findOne({ where: { id: req.query.id }, raw: true });
        res.json({ code: 200, message: "employee Find Successfully", data: data })
    } catch (error:any) {
        send_error(res,error)
    }
});