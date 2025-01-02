import * as jwt from 'jsonwebtoken';
import { jwt_password } from '../config/comman_data';
import { send_error } from '../common/send-error';

export let auth_middleware =  (req:any, res:any, next:any) => {
    try {
        if(req.query.token){
            let user = jwt.verify(req.query.token, jwt_password);
            if(user){
                req.user = user
            } else{
                send_error(res,{ code :401, message : "Token Couldn't be verified"})
            }
        }
        next()
    } catch (error) {
        send_error(res,{ code :401, message : 'Invalid Token'})
    }

}
