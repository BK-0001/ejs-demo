import { Request, Response, Router } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.redirect("/articles");
});

router.all("*", (req: Request, res: Response) => {
  res.status(404).render("pages/not-found", { url: req.url });
});
