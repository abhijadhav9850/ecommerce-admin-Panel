export let transaction_list_swagger = {
  get: {
    summary: "This returns transaction list",
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
            count: {
              type: "number",
              example: 3
            },
            message: {
              type: "string",
              example: "Transactions fetched successfully"
            },
            data: {
              type: "array",
              example: [
                { id: 1, sub_head: 'Food', type: "Credit", amount: 230, method: "Net Banking", account_id: 1,description:"pani puri",head:"Personal" },
                { id: 2, sub_head: 'Lunch', type: "Credit", amount: 522, method: "UPI", account_id: 2,description:"pani puri",head:"Personal"  },
                { id: 3, sub_head: 'Fuel', type: "Debit", amount: 500, method: "UPI", account_id: 3 ,description:"pani puri",head:"Personal" }
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