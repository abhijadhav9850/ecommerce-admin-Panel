export let change_status_swagger = {
  post: {
    summary: "This is change order status Api",
    tags: ["Order"],
    parameters: [
      {
        in: "query",
        name: "order_id",
        description: "order_id",
        required: true,
        schema: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "1"
            }
          }
        }
      },
      {
        in: "query",
        name: "status",
        description: "status",
        required: true,
        schema: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "started"
            }
          }
        }
      },
      {
        in: "query",
        name: "otp",
        description: "Otp",
        schema: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "2123"
            }
          }
        }
      },
      {
        in: "query",
        name: "token",
        description: "token",
        required: true,
        schema: {
          type: "string",
          properties: {
            token: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9qUTsorfhQO8P32GviTBXHujifdr7HKD_lRB7dB8Ki4w"
            }
          }
        }
      },
    ],
    responses: {
      200: {
        description: "Successful response",
        schema: {
          type: "object",
          properties: {
            code: {
              type: "number",
              example: 200
            },
            message: {
              type: "string",
              example: "Order status changed susccessfully"
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