import { Request, Response } from "express";
import { UserModel } from "../models/user";

const renderLogin = (req: Request, res: Response) => {
  res.render("pages/login");
};
const renderRegister = (req: Request, res: Response) => {
  res.render("pages/register");
};

const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // check if the user existing
  const existing = UserModel.findBy(email);

  // if not, then we need to redirect user and saying email or password is not correct
  // we need to check the password are the same
  if (!existing || existing.password !== password) {
    req.app.locals = { error: "Invalid Email or Password" };
    res.redirect("/auth/login");
  }

  // if everything is good
  // redirect user to the some page needs to be authorized
  res.redirect("/articles");
};

const register = (req: Request, res: Response) => {};
const logout = (req: Request, res: Response) => {};

export default { renderLogin, renderRegister, login, register, logout };
