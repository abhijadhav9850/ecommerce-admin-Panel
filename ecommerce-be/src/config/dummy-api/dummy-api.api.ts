
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { dummy_api_permissions } from "./dummy-api.permission";
import { dummy_api_swagger } from "./dummy-api.swagger";
import { dummy_api_body_schema, dummy_api_query_schema } from "./dummy-api.validation";

export let dummy_api = {
    url : '/application/dummy-api',
    method : 'get',
    permissions : dummy_api_permissions,
    swagger: dummy_api_swagger,
    body_schema : dummy_api_body_schema,
    query_schema : dummy_api_query_schema
}
  
app.get(dummy_api.url, async (req:any, res) => {
    try {
        res.send('This is dummy-api Api')
    } catch (error:any) {
        send_error(res,error)
    }
});