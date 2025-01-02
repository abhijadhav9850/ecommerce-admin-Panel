export let update_wing_swagger = {
  post: {
    summary: "This is Update Wings API",
    tags: ["Wing"],
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
          type: "number",
          properties: {
            id: {
              type: "number",
              example: 1
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
            name: {
              type: "string",
              example: "A Wings"
            },
          }
        }
      },
    ],
    responses: {
      200: {
        description: "Wings Updated Successfully",
        schema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              example: 1
            },
            name: {
              type: "string",
              example: "A Wings"
            },
            building_id: {
              type: "number",
              example: 1
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