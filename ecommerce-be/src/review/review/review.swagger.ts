export let review_swagger = {
  post: {
    summary: "This returns Review",
    tags: ["Review"],
    description: "token",
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
            rating: {
              type: "float",
              example: 4.5
            },
            review: {
              type: "string",
              example: "Good"
            },
            user_id: {
              type: "number",
              example: 1
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
              example: 1
            },
            message: {
              type: "string",
              example: "Review created sucessfully"
            },
            data: {
              type: "object",
              example: [
                {
                  id:1,
                  review: "Food",
                  rating: "Debit",
                  user_id: 1
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