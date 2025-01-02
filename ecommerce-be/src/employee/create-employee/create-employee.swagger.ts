export let create_employee_swagger = {
  post: {
    parameters: [
      {
        in: "body",
        name: "body",
        description: "this is body",
        required: true,
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Abhi Jadhav"
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
              example: "1212121212"
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
            count: {
              type: "number",
              example: 1
            },
            "data": {
              type: "array",
              example: [
                { id: 1, name: 'Abhi Jadhav',email:'abhi@gmail.com',address: 'Ghansoli', phone:'1212121212' }
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