import express, { Response, Request } from "express";
import dotenv from "dotenv";
import routerV1 from "./src/routes/v1";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "./swagger/swagger-output.json";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "ROOT APP",
  });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc, {
  explorer: true,
  swaggerOptions: {
    persistAuthorization : true,
    displayRequestDuration: true
  }
}
));

app.use("/api/v1", routerV1);

app.listen(5001, () => {
  console.log("SERVERNYA SUDAH JALAN CUY");
});
