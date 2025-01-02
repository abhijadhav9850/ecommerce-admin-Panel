import { send_error } from "../common/send-error"
import { apis } from "../config/api.list"

let skip_apis: any = ['api-docs']

export let body_validation_middleware = (req: any, res: any, next: any) => {
    try {
        let api_data: any = Object.values(apis).find((item: any) => item.url == req.path)
        if (check_if_not_skipped_path(req.path)) {
            if (api_data.body_schema) {
                validation(req.body, api_data.body_schema)
            }
        }
        next()
    } catch (error) {
        console.log(error)
        send_error(res, error)
    }
}

function check_if_not_skipped_path(current_path: string) {
    try {
        let exists = skip_apis.find((path: string) => current_path.includes(path))
        if (exists) {
            return false
        } else {
            return true
        }
    } catch (error) {

    }
}


let validation = (body: any, body_schema: any) => {
    if (body && body_schema) {
        let errors = body_schema.validate(body, { abortEarly: false })
        if (errors?.error) {
            throw { code: 400, message: errors.error?.details }
        }
    }
}