import { apis } from "../config/api.list";

export const swaggerUi = require('swagger-ui-express');

let swagger_object: any = {}
setTimeout(() => {
  if (apis) {
    Object.values(apis).forEach((api: any) => {
      swagger_object[api.url] = api.swagger
    })
  } else {
    console.log('Apis is empty')
  }
}, 1000);

export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "title": "Express API",
    "version": "1.0.0",
    "description": "Sample Swagger documentation for an Express API"
  },
  "paths": swagger_object,
  "tags": [
    {
      "name": "Auth",
      "description": "Operations related to Auth"
    },
    {
      "name": "User",
      "description": "Operations related to User"
    },
    {
      "name": "Home",
      "description": "Operations related to Home"
    },
    {
      "name": "Product",
      "description": "Operations related to Product"
    },
    {
      "name": "Order",
      "description": "Operations related to Order"
    },
    {
      "name": "Account",
      "description": "Operations related to Account"
    },
    {
      "name": "Transaction",
      "description": "Operations related to Transaction"
    },
    {
      "name": "Society",
      "description": "Operations related to Society"
    },
    {
      "name": "Building",
      "description": "Operations related to Building"
    },
    {
      "name": "Wing",
      "description": "Operations related to Wing"
    },
    {
      "name": "Dummy",
      "description": "Operations related to Dummy"
    },
  ]
}
