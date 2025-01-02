export let create_order_swagger  = {
  post: {
    summary: "This is create order api",
    tags: ["Order"],
    parameters: [
      {
        in: 'query',
        name : 'token',
        description : 'token',
        required : true,
        schema : {
          type : 'string',
          properties : {
            type : 'string',
            example : '1231212323'
          }
        }
      },
      {
        in: "body",
        name: "Body",
        description: "This is body of Create Order Api",
        required: true,
        schema: {
          type: "object",
          properties: {
            items: {
              type: "array",
              example: [
                { product_id : 1, quantity : 3 },
                { product_id : 1, quantity : 3 },
              ]
            },
            taste : {
              type : 'string',
              example : 'Medium Spicy'
            },
            instructions : {
              type : 'string',
              example : 'Bhai Hari hari mirchi use karna, lal mirchi nahi. Mujhe allergy hai'
            },
            payment_method : {
              type : 'string',
              example : 'Cash on Delivery'
            }
          }
        }
      }
    ],
    responses: {
      200: {
        description: "Successful response",
        schema: {
          type: "object",
          properties: {
            "message" : {
              type : "string",
              example : "Order created successfully"
            },
            "data" : {
              type : "object",
              example : {
                id : 2,
                items : [
                  { product_id : 1, quantity : 3, price_per_item:70, price : 210 },
                  { product_id : 2, quantity : 4, price_per_item:20, price : 80 }
                ],
                taste : 'Medium Spicy',
                instructions : 'Bhai Hari hari mirchi use karna, lal mirchi nahi. Mujhe allergy hai',
                payment_method : 'Cash On Delivery'
              }
            }
          }
        }
      },
      403: {
        description: "Unauthorized Access",
        schema: {
          type: "object",
          properties: {
            code: {
              type: "number",
              example: 403
            },
            message: {
              type: "string",
              example: "Unauthorized Access"
            }
          }
        }
      }
    }
  }
}