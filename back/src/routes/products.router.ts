import { Router } from "express";
import { getProducts, getProductById, fetchProductsByCategory } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById)
router.get('/categories/:categoryId/products', fetchProductsByCategory);
export default router;
