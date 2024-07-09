import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { router as articlesRouter } from "./routes/articles.router";
import { router as indexRouter } from "./routes/index.router";

export const app = express();

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup layout
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.use(expressEjsLayouts);

// setup to let express know where to find static files are
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.urlencoded());

app.use("/articles", articlesRouter);
app.use("/", indexRouter);
