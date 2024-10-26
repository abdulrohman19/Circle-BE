import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import { authentication } from "../middlewares/authentication";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "INI APP EXPRESS B57",
  });
});

router.use("/users", authentication, userRouter);
router.use(authRouter);

export default router;
