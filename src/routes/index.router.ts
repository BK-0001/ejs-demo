import { Request, Response, Router } from "express";

export const router = Router();

router.all("*", (req: Request, res: Response) => {
  res.status(404).render("pages/not-found", { url: req.url });
});
