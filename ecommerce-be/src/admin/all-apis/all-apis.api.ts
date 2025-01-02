
import { apis } from "../../config/api.list";
import { app } from "../../common/express";
import { all_apis_permission } from "./all-apis.permission";
import { send_error } from "../../common/send-error";

export let all_apis = {
    url : '/admin/all-apis',
    method : 'get',
    permissions : all_apis_permission,
    swagger:{}
}
  
app.get(all_apis.url, (req:any, res) => {
  try {
    let response : any = apis;
    if(req.query.level1){
      response = response[req.query.level1]
    }
    if(req.query.level2){
      response = response[req.query.level2]
    }
    if(req.query.level3){
      response = response[req.query.level3]
    }
    res.json(response)
  } catch (error) {
    send_error(res,error)
  }
})