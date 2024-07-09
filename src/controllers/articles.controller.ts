import { Request, Response } from "express";
import { ArticleModel } from "../models/article";

const getAllArticles = (req: Request, res: Response) => {
  const articles = ArticleModel.findMany();

  res.status(200).render("pages/articles", { articles });
};

const renderNew = (req: Request, res: Response) => {
  res.status(200).render("pages/articles-new");
};

const create = (req: Request, res: Response) => {
  ArticleModel.create(req.body);
  res.redirect("/articles");
};

const getFilteredArticles = (req: Request, res: Response) => {
  const { q } = req.query;

  const filteredArticles = ArticleModel.findBySearch(q as string);

  res.status(200).render("pages/articles-search", {
    search: q,
    articles: filteredArticles
  });
};

export default { getAllArticles, getFilteredArticles, renderNew, create };
