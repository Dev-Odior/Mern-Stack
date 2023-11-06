const express = require("express");
require("express-async-errors");
const app = express();

const morgan = require("morgan");
const colors = require("colors");

const globalErrorHandler = require("./ErrorHandlers/globalErrorHandler");
const notFoundError = require("./ErrorHandlers/notFoundHandler");

const bunyan = require("bunyan");
const logger = bunyan.createLogger({ name: "App" });

const connectDB = require("./ConnectDB/connectDB");
const appRouter = require("./Routes/appRouter");
const goalsRouter = require("./Routes/goalsRoutes");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(morgan("tiny"));

app.use("/api/v1/goals", goalsRouter);
app.use("/api/v1", appRouter);

app.use(globalErrorHandler);
app.use(notFoundError);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(Number(process.env.PORT), () => {
      logger.info(`Server is listening at port ${process.env.PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start server");
    process.exit(1);
  }
};

startServer();
