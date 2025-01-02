export let society_list_swagger = {
  get: {
    summary: "This returns society list",
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
        in: "query",
        name: "page",
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
              example: 2
            },
            message: {
              type: "string",
              example: "Societies fetched successfully"
            },
            data: {
              type: "array",
              example: [
                { id: 1, name: 'City Enclave Society', street: "Terna College Street", sector: "Sector 2", town: "kopar khairane", city: "Navi Mumbai", state: "Maharashtra", country: "India", pincode: "400708" },
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