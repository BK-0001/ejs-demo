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

const remove = (req: Request, res: Response) => {
  // find id
  const { id } = req.params;
  // verify the id is valid in order to delete the resource

  const existing = ArticleModel.findById(id);

  // if does not exist
  // hey we do not have that record
  if (!existing) {
    // do something
  }

  ArticleModel.removeById(id);

  res.redirect("/articles");

  // if does
  // delete the resource and redirect
};

export default {
  getAllArticles,
  getFilteredArticles,
  renderNew,
  create,
  remove
};
