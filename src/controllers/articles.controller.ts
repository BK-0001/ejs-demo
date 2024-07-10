import { Request, Response } from "express";
import { ArticleModel } from "../models/article";

// renderings
const getAllArticles = (req: Request, res: Response) => {
  const articles = ArticleModel.findMany();

  res.status(200).render("pages/articles", { articles });
};

const renderNew = (req: Request, res: Response) => {
  res.status(200).render("pages/articles-new");
};

const getFilteredArticles = (req: Request, res: Response) => {
  const { q } = req.query;

  const filteredArticles = ArticleModel.findBySearch(q as string);

  res.status(200).render("pages/articles-search", {
    search: q,
    articles: filteredArticles
  });
};

// /articles/:id?title=
const renderEdit = (req: Request, res: Response) => {
  // get the id
  const { id } = req.params;

  // get the article with the id
  const article = ArticleModel.findById(id);

  // pass the data to be edited to the template

  res.render("pages/articles-edit", { article });
};

// crud for articles

const create = (req: Request, res: Response) => {
  ArticleModel.create(req.body);
  res.redirect("/articles");
};

// // /articles/:id?title="abc"
const edit = (req: Request, res: Response) => {
  // get the id from url
  const { id } = req.params;

  // need to get the data
  const article = ArticleModel.findById(id);

  if (!article) {
    // throw the error
    return;
  }

  // you are going to update the article
  ArticleModel.update(id, req.body);

  // redirect to the articles page
  res.redirect("/articles");
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
  renderEdit,
  create,
  edit,
  remove
};
