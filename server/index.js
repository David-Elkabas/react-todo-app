const express = require("express");
const app = express();
const todos = require("./Todos");
const logger = require("./middleware/logger");

// init middleware
app.use(logger);

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
