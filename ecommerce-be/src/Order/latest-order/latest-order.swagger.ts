export let latest_order_swagger  = {
  get: {
    summary: "This returns order list",
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
              example: "Latest Order"
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
                    properties: {
                      id: {
                        type: "integer",
                        example: 16
                      },
                      order_by: {
                        type: "integer",
                        example: 1
                      },
                      order_otp: {
                        type: ["string", "null"],
                        example: null
                      },
                      status: {
                        type: "string",
                        example: "Pending"
                      },
                      taste: {
                        type: "string",
                        example: "Medium Spicy"
                      },
                      instructions: {
                        type: "string",
                        example: "Bhai Hari hari mirchi use karna, lal mirchi nahi. Mujhe allergy hai"
                      },
                      payment_method: {
                        type: "string",
                        example: "Cash on Delivery"
                      },
                      createdAt: {
                        type: "string",
                        example: "2024-02-06T07:38:40.063Z"
                      },
                      updatedAt: {
                        type: "string",
                        example: "2024-02-06T07:28:36.063Z"
                      }
                    },
                    required: ["id", "order_by", "status", "taste", "instructions", "payment_method", "createdAt", "updatedAt"]
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