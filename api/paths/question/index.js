module.exports = function () {
  let operations = {
    GET,
    POST,
    PUT,
    DELETE,
  };

  function GET(req, res, next) {
    res.status(200).json([
      { id: 0, question: "Who is Obafemi Awolowo" },
      { id: 1, question: "Who is Ahamadu Bello" },
    ]);
  }

  function POST(req, res, next) {
    res.status(201).json({ message: "Question Added" });
  }

  function PUT(req, res, next) {
    res.status(200).json({ message: "Question updated" });
  }

  function DELETE(req, res, next) {
    res.status(200).json({ message: "Question removed from database" });
  }

  GET.apiDoc = {
    summary: "Fetch Questions.",
    operationId: "getQuestions",
    responses: {
      200: {
        description: "List of Questions.",
        schema: {
          type: "array",
          items: {
            $ref: "#/definitions/Question",
          },
        },
      },
    },
  };

  POST.apiDoc = {
    summary: "Create Questions.",
    operationId: "createQuestion",
    consumes: ["application/json"],
    parameters: [
      {
        in: "body",
        name: "question",
        schema: {
          $ref: "#/definitions/Question",
        },
      },
    ],
    responses: {
      201: {
        description: "Created",
      },
    },
  };

  PUT.apiDoc = {
    summary: "Update questions.",
    operationId: "updateQuestion",
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        type: "string",
      },
      {
        in: "body",
        name: "questions",
        schema: {
          $ref: "#/definitions/Question",
        },
      },
    ],
    responses: {
      200: {
        description: "Updated ok",
      },
    },
  };

  DELETE.apiDoc = {
    summary: "Delete question.",
    operationId: "deleteQuestion",
    consumes: ["application/json"],
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "Delete",
      },
    },
  };

  return operations;
};
