export async function check_status_and_send_otp(req:any,order:any,res:any){
    if (req.user.role === "Delivery Boy" && req.query.status === "Dispatched") {
        order.order_otp = Math.floor(1000 + Math.random() * 9000);
    }
}

export async function check_and_verify_otp_if_delivered(req:any,order:any,res:any){
    if (req.user.role === "Delivery Boy" && req.query.status === "Delivered") {
        if (!req.query.otp) {
            throw {code : 400, message : 'Otp is required'}
        }
        if (order?.order_otp == req.query.otp) {
        } else {
            throw {code : 400, message : 'Invalid Otp sent'}
        }
    }
}