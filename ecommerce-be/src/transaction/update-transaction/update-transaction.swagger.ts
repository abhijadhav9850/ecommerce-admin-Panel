export let update_transaction_swagger = {
  post: {
    summary: "This is update transaction Api",
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
            id: {
              type: "number",
              example: 1
            },
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
            description:{
              type: "string",
              example: "pani puri"
            },
            head:{
              type: "string",
              example: "Personal"
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
              example: "Transaction updated successfully"
            },
            data: {
              type: "arary",
              example: [
                { id: 1, account_id: 1, sub_head: "Food", type: "Debit", method: "Net Banking", amount: 230,description:"pani puri",head:"Personal"  }
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