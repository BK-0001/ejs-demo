import { Router } from "express";
import authController from "../controllers/auth.controller";

export const router = Router();

router.get("/login", authController.renderLogin);
router.get("/register", authController.renderRegister);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/logout", authController.logout);
