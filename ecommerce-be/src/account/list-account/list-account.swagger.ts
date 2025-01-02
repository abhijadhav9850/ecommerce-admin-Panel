import { array } from "joi";

export let list_account_swagger = {
  get: {
    summary: "This is List Account api",
    tags: ["Account"],
    description: "token",
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
        description: "Account List",
        schema: {
          type: "object",
          properties: {
            count: {
              type: "number",
              example: 1
            },
            message: {
              type: "string",
              example: "Account list is successfully"
            },
            data: {
              type: "array",
              example: [
                {
                  id: 5,
                  user_id: 2,
                  account_number: "765439876543456",
                  ifsc_code: "KOT76543",
                  bank: "Kotak",
                  type: "debit",
                  createdAt: "2024-02-08T14:54:29.958Z",
                  updatedAt: "2024-02-08T14:54:29.958Z"
                },]
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