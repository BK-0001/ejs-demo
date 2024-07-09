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

const findById = (id: string): Article | null => {
  return articles.find((article) => article.id === id) || null;
};

const create = (data: Omit<Article, "id">): Article => {
  const newArticle: Article = {
    id: crypto.randomUUID(),
    ...data
  };

  articles.push(newArticle);

  return newArticle;
};

const removeById = (id: string) => {
  const articleIndex = articles.findIndex((article) => article.id === id);

  if (articleIndex !== -1) {
    articles.splice(articleIndex, 1);
  }
};

export const ArticleModel = {
  findBySearch,
  findMany,
  create,
  findById,
  removeById
};
