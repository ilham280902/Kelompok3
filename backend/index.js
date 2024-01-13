import express from "express";
import cookieParser from "cookie-parser";
import FileUpload from "express-fileupload";
import cors from "cors";
import router from "./routes/Route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:7200",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router);

app.listen(3000, () => console.log("Server Up and Running..."));
