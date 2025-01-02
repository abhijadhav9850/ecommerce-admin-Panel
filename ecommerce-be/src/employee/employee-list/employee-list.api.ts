
import { employee } from "../../../models/employee.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { employee_list_permissions } from "./employee-list.permission";
import { employee_list_swagger } from "./employee-list.swagger";
import { employee_list_body_schema, employee_list_query_schema } from "./employee-list.validation";

export let employee_list = {
    url : '/employee/employee-list',
    method : 'get',
    permissions : employee_list_permissions,
    swagger: employee_list_swagger,
    body_schema : employee_list_body_schema,
    query_schema : employee_list_query_schema
}
  
app.get(employee_list.url, async (req:any, res) => {
    try {
        let employee_list = await employee.findAll();
        if (employee_list.length > 0) {
            res.json({ message: 'employee fetched successfully', data: employee_list });
        } else {
            res.json({ message: 'No records', data: employee_list })
        }
    } catch (error:any) {
        send_error(res,error)
    }
});