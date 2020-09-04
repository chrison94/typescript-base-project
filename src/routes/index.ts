import { Request, Response, Router } from "express";
import { OK } from "http-status-codes";

const apiRouter = Router();

const router = Router();
router.get("/", async (req: Request, res: Response) => {
  return res.sendStatus(OK);
});

router.post("/", async (req: Request, res: Response) => {
  return res.send(req.body);
});

router.use("/api/v1", apiRouter);

export default router;
