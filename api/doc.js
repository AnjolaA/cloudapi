const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "History Questions API.",
    version: "1.0.0",
  },
  definitions: {
    Question: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        question: {
          type: "string",
        },
      },
      required: ["id", "question"],
    },
  },
  paths: {},
};

module.exports = apiDoc;
