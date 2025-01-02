export let create_account_swagger = {
  post: {
    summary: "This is Create Account Api",
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
            user_id: {
              type: "number",
              example: 1
            },
            account_number: {
              type: "string",
              example: "187t870976"
            },
            ifsc_code: {
              type: "string",
              example: "PNB10101"
            },
            bank: {
              type: "string",
              example: "HDFC"
            },
            type: {
              type: "string",
              example: "debit"
            },
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
              example: "Account Created Successfully."
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