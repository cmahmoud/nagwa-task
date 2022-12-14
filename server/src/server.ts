import express from "express";
import TaskRouter from "./routes/task";

const app = express();

// middlewares
app.use(express.json());
app.use(function (req, res, next) {
    //to allow connect to client
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    );
    next();
});

// routes
app.use("/api/task", TaskRouter);

app.listen(5000, () => {
    console.log("server running on 5000");
});
