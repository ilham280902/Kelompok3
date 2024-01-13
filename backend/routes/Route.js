import express from "express";
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

import { signUp, signIn, signOut } from "../controllers/AuthController.js";
import { isLogin } from "../middleware/isLogin.js";
import { isLogout } from "../middleware/isLogout.js";

const router = express.Router();

router.post("/auth/sign-up", isLogout, signUp);
router.post("/auth/sign-in", isLogout, signIn);
router.post("/auth/sign-out", isLogout, signOut);

router.get("/products", isLogin, getProducts);
router.get("/products/:id", isLogin, getProductById);
router.post("/products", isLogin, saveProduct);
router.patch("/products/:id", isLogin, updateProduct);
router.delete("/products/:id", isLogin, deleteProduct);

export default router;
