const express = require("express");
const app = express();
const morgan = require("morgan");
morgan("tiny");
morgan(":method :url :status :res[content-length] - :response-time ms");
morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");
});
morgan.token("type", function (req, res) {
  return req.headers["content-type"];
});

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/info", (request, response) => {
  const total = persons.length;
  const date = new Date();
  response.send(`Phonebook has info for ${total} people <br> ${date}`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  response.json(person);
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  if (body.number === undefined) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 10000),
  });

  person
    .save()
    .then((savedNote) => savedNote.toJSON())
    .then((savedAndFormattedPerson) => {
      response.json(savedAndFormattedPerson);
    })
    .catch((error) => {
      return response.status(400).json({
        error: "name must be unique",
      });
    });
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  person = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
