export let order_swagger  = {
  get: {
    summary: "This is Get-Order list api",
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
        in: 'query',
        name : 'id',
        description : 'id',
        required : true,
        schema : {
          type : 'string',
          properties : {
            type : 'string',
            example : '1'
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
            message: {
              type: "string",
              example: "Order fetched successfully"
            },
            "data": {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                  example: 1
                },
                items: {
                  type: "array",
                  items: {
                    type: "object",
                    example : {
                      "id": 16,
                      "order_by": 2,
                      "order_otp": "7629",
                      "status": "Delivered",
                      "taste": "Medium Spicy",
                      "instructions": "Bhai Hari hari mirchi use karna, lal mirchi nahi. Mujhe allergy hai",
                      "payment_method": "Cash on Delivery",
                      "createdAt": "2024-02-06T07:38:40.063Z",
                      "updatedAt": "2024-02-07T09:32:32.830Z",
                      "items": [
                        {
                          "id": 21,
                          "order_id": 16,
                          "product_id": 1,
                          "quantity": 10,
                          "price_per_item": 100,
                          "price": 1000,
                          "createdAt": "2024-02-06T07:28:36.187Z",
                          "updatedAt": "2024-02-06T07:28:36.187Z"
                        },
                        {
                          "id": 22,
                          "order_id": 16,
                          "product_id": 2,
                          "quantity": 3,
                          "price_per_item": 20,
                          "price": 60,
                          "createdAt": "2024-02-06T07:28:36.187Z",
                          "updatedAt": "2024-02-06T07:28:36.187Z"
                        }
                      ]
                    }
                  }
                }
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