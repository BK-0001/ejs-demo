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

// setup to let express know where to find static files are
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  // server side
  res.render("pages/index"); // server side rendering
});
app.get("/articles", (req: Request, res: Response) => {
  res.render("pages/articles");
});
