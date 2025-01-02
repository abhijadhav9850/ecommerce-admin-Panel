
import { Order } from "../../../models/Order.model";
import { OrderItem } from "../../../models/OrderItem.model";
import { Product } from "../../../models/Product.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { create_order_permissions } from "./create-order.permission";
import { create_order_swagger } from "./create-order.swagger";
import { create_order_body_schema, create_order_query_schema } from "./create-order.validation";

export let create_order = {
    url : '/order/create-order',
    method : 'post',
    permissions : create_order_permissions,
    swagger: create_order_swagger,
    body_schema : create_order_body_schema,
    query_schema : create_order_query_schema
}
  
app.post(create_order.url, async (req:any, res) => {
    try {
        for(let i=0; i<req.body.items.length;i++){
            let item = req.body.items[i]
            let product:any = await Product.findOne({where : { id : item.product_id }})
            if(!product){
                throw { code : 400, message : 'Invalid Product Id Passed' }
            }
            item.price_per_item = product.price;
            item.price = item.price_per_item * item.quantity
        }
        let body = {
            order_by: req.user.id,
            status: 'Pending',
            taste: req.body.taste,
            instructions: req.body.instructions,
            payment_method: req.body.payment_method
        }
        let order:any = await Order.create(body,{raw:true})
        req.body.items.forEach((item:any) => {
            item.order_id = order.id
        });        
        let items = await OrderItem.bulkCreate(req.body.items, {returning: true})
        res.json({message : "Order created successfully",data:order})
    } catch (error:any) {
        send_error(res,error)
    }
});