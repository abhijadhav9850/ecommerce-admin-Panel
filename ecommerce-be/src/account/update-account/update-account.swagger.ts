export let update_account_swagger = {
  post: {
    summary: "This returns product list",
    tags: ["Account"],
    parameters: [
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
      {
        in: "body",
        name: "body",
        description: "body",
        required: true,
        schema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              example: 1
            },
            type: {
              type: "string",
              example: "upi"
            },
            account_number: {
              type: "string",
              example: "121212111"
            },
            ifsc_code: {
              type: "string",
              example: "huggtfwf333"
            },
            bank: {
              type: "string",
              example: "hdfc"
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
            count: {
              type: "number",
              example: 1
            },
            "data": {
              type: "array",
              example: [
                { id: 1, name: 'Pitla Bhakri' }
              ]
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