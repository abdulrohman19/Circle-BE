import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "INI APP EXPRESS B57",
  });
});

router.use("/users", userRouter);
router.use(authRouter);

export default router;
