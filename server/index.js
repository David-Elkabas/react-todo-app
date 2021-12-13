const express = require("express");
const app = express();
const logger = require("./middleware/logger");

// init middleware
app.use(logger);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Todos API Routes
app.use("/api/todos", require("./routes/api/todos"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
