import { Router } from "express";
import articlesController from "../controllers/articles.controller";

export const router = Router();

// /articles/
router.get("/", articlesController.getAllArticles);
router.post("/", articlesController.create);
router.post("/:id/delete", articlesController.remove);
router.get("/new", articlesController.renderNew);
router.get("/:id/edit", articlesController.renderEdit);
router.post("/:id/edit", articlesController.edit);
router.get("/search", articlesController.getFilteredArticles);
