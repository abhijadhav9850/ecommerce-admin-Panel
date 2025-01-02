export let employee_list_swagger = {
  get: {
    tags: ["Employee"],
    parameters: [
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
                { id: 1, name: 'Abhi Jadhav',email:'abhi@gmail.com',address:'Ghansoli',phone:1234512345 },
                { id: 2, name: 'Shreeram Kaudre',email:'shree@gmail.com',address:'koprigao',phone:1234567891 },
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