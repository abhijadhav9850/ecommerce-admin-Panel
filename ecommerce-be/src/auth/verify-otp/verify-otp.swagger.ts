export let verify_otp_swagger  = {
  post: {
    summary: "This is verify otp functionality",
    tags: ["Auth"],
    parameters: [
      {
        in: "body",
        name: "body",
        description: "Body",
        required: true,
        schema: {
          type: "object",
          properties: {
            otp_id: {
              type: "number",
              example: 3
            },
            otp: {
              type: "string",
              example: "8080"
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
            message: {
              type: "string",
              example: "User verified successfully"
            },
            "data" : {
              type : "object",
              example : {
                id :1,
                name :'Akash',
                email : 'akashs25@gmail.com',
                phone : '8097200240',
                token : 'sdfjkhsdfjklsdhfjksdhfjksdhfjksdhfjksdhfjksdfhsdjkfhsdjkfhs'
              }
            }
          }
        }
      },
      400: {
        description: "Otp Id and Otp Does Not Match or Invalid Data Passed",
        schema: {
          type: "object",
          properties: {
            code: {
              type: "number",
              example: 400
            },
            message: {
              type: "string",
              example: "Otp Id and Otp Does Not Match or Invalid Data Passed"
            }
          }
        }
      }
    }
  }
}