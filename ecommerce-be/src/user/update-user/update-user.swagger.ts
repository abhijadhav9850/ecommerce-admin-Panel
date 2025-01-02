export let update_user_swagger = {
  post: {
    summary: "This Api updates user",
    tags: ["User"],
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
        name: "Body",
        description: "This is body of Update User Api",
        required: true,
        schema: {
          type: "object",
          properties: {
            id: {
              type: 'number',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Akash'
            },
            email: {
              type: 'string',
              example: 'akashs25@gmail.com'
            },
            preferred_language: {
              type: 'string',
              example: 'English'
            },
            phone: {
              type: 'string',
              example: '9326196351'
            },
            role: {
              type: 'string',
              example: 'Admin'
            },
            address: {
              type: 'string',
              example: 'koperkhairne sector 2'
            },
            city: {
              type: 'string',
              example: 'Navi Mumbai'
            },
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
            code: {
              type: "number",
              example: 200
            },
            message: {
              type: "string",
              example: "User updated successfully"
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