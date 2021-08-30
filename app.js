const express = require("express");
const app = express();

const { initialize } = require("express-openapi");
const v1ApiDoc = require("./api/doc");
const swaggerUi = require("swagger-ui-express");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initialize({
  app,
  apiDoc: v1ApiDoc,
  paths: "./api/paths",
});

// OPEN API
app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "http://localhost:80/api-docs",
    },
  })
);
app.listen(80);
