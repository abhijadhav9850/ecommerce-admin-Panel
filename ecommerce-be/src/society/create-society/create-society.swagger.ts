export let create_society_swagger = {
  post: {
    summary: "This is create society Api",
    tags: ["Society"],
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
            name: {
              type: "string",
              example: "Shanti apartnemt"
            },
            street: {
              type: "string",
              example: "Fort road"
            },
            sector: {
              type: "string",
              example: "5"
            },
            town: {
              type: "string",
              example: "Vashi"
            },
            city: {
              type: "string",
              example: "Navi Mumbai"
            },
            state: {
              type: "string",
              example: "Maharashtra"
            },
            country: {
              type: "string",
              example: "India"
            },
            pincode: {
              type: "string",
              example: "400407"
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
            code: {
              type: "number",
              example: 200
            },
            message: {
              type: "string",
              example: "Society created successfully"
            },
            data: {
              type: "array",
              example: [
                { id: 1, name: 'City Enclave Society', street: "Terna College Street", sector: "Sector 2", town: "kopar khairane", city: "Navi Mumbai", state: "Maharashtra", country: "India", pincode: "400708" }
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