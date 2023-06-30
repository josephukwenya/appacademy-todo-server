const express = require("express");
const dotenv = require("dotenv");
// const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();

// Load routes files
const authRouter = require("./routes/authRoutes");
const todoRouter = require("./routes/todoRoutes");

const PORT = process.env.PORT || 5000;

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// app.use(helmet());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("App Academy Todo Web App!");
});

app.use("/api/v1/users", authRouter);
app.use("/api/v1/todos", todoRouter);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
