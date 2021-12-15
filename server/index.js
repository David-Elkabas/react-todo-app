const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const mongoose = require("mongoose");
// init middleware
app.use(logger);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Todos API Routes
app.use("/api/todos", require("./routes/api/todos"));

const PORT = process.env.PORT || 8080;

const url = "mongodb://127.0.0.1:27017/todo-db";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
// mongoose.connect('')
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
