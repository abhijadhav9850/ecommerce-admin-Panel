export let update_employee_swagger = {
  post: {
    tags: ["Employee"],
    parameters: [
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
              example: "abhi"
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
            id: {
              type: "number",
              example: 1
            },
            name: {
              type: "string",
              example: "abhi"
            },
            email: {
              type: "string",
              example: "abhi@gmail.com"
            },
            address: {
              type: "string",
              example: "Ghansoli"
            },
            phone: {
              type: "string",
              example: 1234567890
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