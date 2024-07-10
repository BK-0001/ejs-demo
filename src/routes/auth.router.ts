import { Router } from "express";

export const router = Router();

// /auth/login
router.get("/login");
// /auth/register
router.get("/register");

router.post("login");
router.post("register");
router.post("logout");
