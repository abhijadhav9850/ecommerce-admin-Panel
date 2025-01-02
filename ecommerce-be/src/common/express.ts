import express from "express"
import { swaggerDocument, swaggerUi } from "./swagger"
import { auth_middleware } from "../middlewares/auth.middleware";
import { check_role_middleware } from "../middlewares/check-role.middleware";
import { body_validation_middleware } from "../middlewares/body_validation.middleware";
import { query_validation_middleware } from "../middlewares/query_validation.middleware";

export const app = express()
const cors = require('cors');
let body_parser = require('body-parser');
const port = process.env.PORT || 3000

app.use(cors());
app.use(body_parser.json());
app.use(auth_middleware)
app.use(check_role_middleware)
app.use(body_validation_middleware)
app.use(query_validation_middleware)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

setTimeout(() => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
}, 2000)