
import { Product } from "../../../models/Product.model";
import { app } from "../../common/express";
import { send_error } from "../../common/send-error";
import { product_list_permissions } from "./product-list.permission";
import { product_list_swagger } from "./product-list.swagger";
import { product_list_body_schema, product_list_query_schema } from "./product-list.validation";


export let product_list = {
    url : '/product/product-list',
    method : 'get',
    permissions : product_list_permissions,
    swagger: product_list_swagger,
    body_schema : product_list_body_schema,
    query_schema : product_list_query_schema
}
  
app.get(product_list.url, async (req:any, res) => {
    try {
        let products = await Product.findAll()
        res.json(products)
    } catch (error:any) {
        send_error(res,error)
    }
});