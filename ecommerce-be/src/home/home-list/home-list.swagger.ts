export let home_list_swagger = {
  get: {
    summary: "This returns home list",
    tags: ["Home"],
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
        required: true,
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
        required: true,
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
              example: "Homes fetched successfully"
            },
            data: {
              type: "array",
              example: [
                { id: 1, room_no: 202, floor: "4th floor", wing_id: 1 },
                { id: 2, room_no: 324, floor: "3th floor", wing_id: 2 },
                { id: 3, room_no: 450, floor: "4th floor", wing_id: 3 }
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