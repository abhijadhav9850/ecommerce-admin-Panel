export let get_employee_swagger = {
  get: {
    tags: ["Employee"],
    parameters: [
      {
        in: 'query',
        name : 'id',
        description : 'id',
        required : true,
        schema : {
          type : 'string',
          properties : {
            type : 'string',
            example : '1'
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