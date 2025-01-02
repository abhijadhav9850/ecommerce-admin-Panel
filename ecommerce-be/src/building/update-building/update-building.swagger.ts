export let update_building_swagger = {
  post: {
    summary: "This is Update Building API",
    tags: ["Building"],
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
            name: {
              type: "string",
              example: "Vasant Nivas"
            },
            society_id: {
              type: "number",
              example: 1
            },
          }
        }
      },
    ],
    responses: {
      200: {
        description: "Building Updated Successfully",
        schema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              example: 1
            },
            name: {
              type: "string",
              example: "Vasant Nivas"
            },
            society_id: {
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