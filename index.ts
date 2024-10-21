import express, { Response, Request } from "express";
import dotenv from "dotenv";
import router from "./src/routes";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "ROOT APP",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(5001, () => {
  console.log("SERVERNYA SUDAH JALAN CUY");
});
