export let product_list_swagger  = {
  get: {
    summary: "This is Product List api",
    tags: ["Product"],
    parameters: [
      {
        in: "query",
        name: "token",
        description: "token",
        required: true,
        schema: {
          type: "object",
        }
      }
    ],
    responses: {
      200: {
        description: "Successful response",
        schema: {
          type: "object",
          properties: {
            "data" : {
              type : "object",
              example : [
                { id: 1,name: 'Pitla',price: 100,createdAt: "2024-02-05T07:42:19.106Z",updatedAt: "2024-02-05T07:42:19.106Z"},
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