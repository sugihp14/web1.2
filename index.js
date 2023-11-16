import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import userRouter from "../backend/src/router/user_r.js";

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(bodyparser.json({ limit: "100mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "10mb", extended: true }));
app.use(userRouter);

app.get("/", (err, res) => {
  res.send("Wellcome");
});

app.listen("5000", () => {
  console.log("server running");
});
