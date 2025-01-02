export let get_logged_in_user_swagger  = {
  get: {
    summary: "This returns Logged in User's Data",
    tags: ["User"],
    parameters: [
      {
        in: 'query',
        name : 'token',
        description : 'token',
        required : true,
        schema : {
          type : 'string',
          properties : {
            type : 'string',
            example : '1231212323'
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
            name : {
              type : "string",
              example : "Akash"
            },
            email : {
              type : "string",
              example : "akash@gmail.com"
            },
            preferred_language : {
              type : "string",
              example : "English"
            },
            phone : {
              type : "string",
              example : "8080808080"
            },
            role : {
              type : "string",
              example : "Admin"
            },
            address : {
              type : "string",
              example : "Admin"
            },
            city : {
              type : "string",
              example : "Admin"
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