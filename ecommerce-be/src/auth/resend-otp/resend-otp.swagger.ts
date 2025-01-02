export let resend_otp_swagger  = {
  post: {
    tags: ["Auth"],
    summary: "This is resend otp Api",
    parameters: [
      {
        in: "body",
        name: "body",
        schema: {
          type: "object",
          properties: {
            phone: {
              type: "string",
              example: "8080808080"
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
            otp_id: {
              type: "number",
              example: 1
            },
            message : {
              type : "string",
              example : "Otp sent successfully"
            }
          }
        }
      },
      400: {
        description: "User not found or Invalid Phone Number",
        schema: {
          type: "object",
          properties: {
            code: {
              type: "number",
              example: 400
            },
            message: {
              type: "string",
              example: "Invalid Phone Number"
            }
          }
        }
      }
    }
  }
}