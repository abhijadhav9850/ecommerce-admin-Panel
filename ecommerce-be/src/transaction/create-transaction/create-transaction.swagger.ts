export let create_transaction_swagger = {
  post: {
    summary: "This is create transaction Api",
    tags: ["Transaction"],
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
            account_id: {
              type: "number",
              example: 1
            },
            sub_head: {
              type: "string",
              example: "Food"
            },
            type: {
              type: "string",
              example: "Debit"
            },
            method: {
              type: "string",
              example: "Net Banking"
            },
            amount: {
              type: "number",
              example: 230
            },
            description: {
              type: "string",
              example: "pani puri"
            },
            head : {
              type: "string",
              example: "personal"
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
            count: {
              type: "number",
              example: 1
            },
            message: {
              type: "string",
              example: "Transaction created sucessfully"
            },
            data: {
              type: "array",
              example: [
                {
                  account_id: 1,
                  sub_head: "Food",
                  type: "Debit",
                  method: "Net Banking",
                  amount: 230,
                  description:"pani puri",
                  head:"Personal"
                }
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