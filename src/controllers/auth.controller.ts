import { Request, Response } from "express";
import { UserModel } from "../models/user";

const renderLogin = (req: Request, res: Response) => {
  res.render("pages/login", { error: null, page: "Login" });
};
const renderRegister = (req: Request, res: Response) => {
  res.render("pages/register", { error: null });
};

const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // check if the user existing
  const existing = UserModel.findBy(email);

  // if not, then we need to redirect user and saying email or password is not correct
  // we need to check the password are the same
  if (!existing || existing.password !== password) {
    res.render("pages/login", { error: "Invalid Email or Password" });
    return;
  }

  // if everything is good
  // redirect user to the some page needs to be authorized
  res.redirect("/articles");
};

const register = (req: Request, res: Response) => {
  // get the credentials
  const { email, password } = req.body;

  // check if the user existing
  const existing = UserModel.findBy(email);

  // if so then, tell user that the email is in use
  if (existing) {
    res.render("pages/register", { error: "email already in use" });
    return;
  }

  // otherwise

  // create user with email and password (hash the password tmr)
  UserModel.create(email, password);

  // redirect user to either login or articles page

  res.redirect("/articles");
};
const logout = (req: Request, res: Response) => {};

export default { renderLogin, renderRegister, login, register, logout };
