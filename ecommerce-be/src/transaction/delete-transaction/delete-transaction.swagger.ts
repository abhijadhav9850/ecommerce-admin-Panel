export let delete_transaction_swagger = {
  delete: {
    summary: "This is delete transaction Api",
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
        name: "id",
        description: "id",
        required: true,
        schema: {
          type: "string",
          properties: {
            id: {
              type: "number",
              example: 1
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
              example: "Transaction deleted successfully"
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