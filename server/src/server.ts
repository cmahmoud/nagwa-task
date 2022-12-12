import express from "express";
import TaskRouter from "./routes/task";

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/task", TaskRouter);

app.listen(5000, () => {
    console.log("server running on 5000");
});
