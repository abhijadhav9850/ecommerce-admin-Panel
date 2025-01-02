import { send_error } from "../common/send-error"
import { apis } from "../config/api.list"

let skip_apis :any = ['api-docs']

export let check_role_middleware = (req: any, res: any, next: any) => {
    try {
        let api_data: any = Object.values(apis).find((item: any) => item.url == req.path)
        let allowed_roles = api_data?.permissions?.roles
        if(check_if_not_skipped_path(req.path)){
            // check_roles(req.user?.role,allowed_roles)
        }
        next()
    } catch (error) {
        send_error(res,error)
    }

}

function check_if_not_skipped_path(current_path:string){
    try {
        let exists = skip_apis.find((path:string)=> current_path.includes(path))
        if(exists){
            return false
        } else{
            return true
        }
    } catch (error) {
        
    }
}

function check_roles(current_user_role:any,allowed_roles:string[]){
    if(!allowed_roles){
        throw { code : 401, message : 'No Allowed Roles Mentioned for the api or Mention Role Public inside allowed roles' }
    }
    let role = allowed_roles.includes(current_user_role)
    let is_public = allowed_roles.includes('Public')
    if(role || is_public){
        return true
    }
    throw { code : 401, message : 'Invalid Role to Access this Api' }
}
