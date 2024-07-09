import { Article } from "../types/articles";

const articles: Article[] = [
  {
    id: "asdkfjkajldsfjaldsfkj",
    title: "My first article",
    description: "It is about my first article"
  }
];

const findMany = (): Article[] => {
  return articles;
};

const findBySearch = (string: string): Article[] => {
  return articles.filter(
    (article) =>
      article.title.includes(string) || article.description.includes(string)
  );
};

const create = (data: Omit<Article, "id">): Article => {
  const newArticle: Article = {
    id: crypto.randomUUID(),
    ...data
  };

  articles.push(newArticle);

  return newArticle;
};

export const ArticleModel = { findBySearch, findMany, create };
