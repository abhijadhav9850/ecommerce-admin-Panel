export let delete_society_swagger = {
  delete: {
    summary: "This is society delete Api",
    tags: ["Society"],
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
      }, {
        in: "query",
        name: "id",
        description: "id",
        required: true,
        schema: {
          type: "string",
          properties: {
            token: {
              type: "number",
              example: 1
            }
          }
        }
      }
    ],
    responses: {
      200: {
        description: "Society deleted successful response",
        schema: {
          type: "object",
          properties: {
            code: {
              type: "number",
              example: 200
            },
            message: {
              type: "string",
              example: "Society deleted successful response"
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