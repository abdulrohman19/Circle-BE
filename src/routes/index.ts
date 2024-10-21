import { Router } from "express";
import userRouter from "./userRouter";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "INI APP EXPRESS B57",
  });
});

router.use("/users", userRouter);

export default router;
