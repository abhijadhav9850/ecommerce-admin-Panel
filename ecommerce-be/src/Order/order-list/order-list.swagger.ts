export let order_list_swagger  = {
  get: {
    summary: "This returns Order list",
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
        in: "query",
        name: "status",
        description: "status",
        schema: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: "Pending"
            }
          }
        }
      },
      {
        in: "query",
        name: "page",
        description: "page",
        schema: {
          type: "object",
          properties: {
            status: {
              type: "number",
              example: 1
            }
          }
        }
      },
      {
        in: "query",
        name: "page_size",
        description: "page_size",
        schema: {
          type: "object",
          properties: {
            status: {
              type: "number",
              example: 10
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
            id: {
              type: "number",
              example: 1
            },
            order_by: {
              type: "number",
              example: 1
            },
            order_otp: {
              type: "string",
              example: "1234"
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
              example: "Make it Spicy"
            },
            payment_method: {
              type: "string",
              example: "Cash on Delivery"
            },
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