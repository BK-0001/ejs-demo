import express, { Request, Response } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";

export const app = express();

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup layout
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.use(expressEjsLayouts);

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index");
});
app.get("/articles", (req: Request, res: Response) => {
  res.render("pages/articles");
});
