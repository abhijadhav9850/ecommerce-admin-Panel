
import { employee } from "../../../models/employee.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_employee_permissions } from "./create-employee.permission";
import { create_employee_swagger } from "./create-employee.swagger";
import { create_employee_body_schema, create_employee_query_schema } from "./create-employee.validation";

export let create_employee = {
    url : '/employee/create-employee',
    method : 'post',
    permissions : create_employee_permissions,
    swagger: create_employee_swagger,
    body_schema : create_employee_body_schema,
    query_schema : create_employee_query_schema
}
  
app.post(create_employee.url, async (req:any, res) => {
    try {
        let data = await employee.create(req.body, { raw: true })
        res.json({ code: 200, message: "employee Created Successfully", data: data })
    } catch (error:any) {
        send_error(res,error)
    }
});