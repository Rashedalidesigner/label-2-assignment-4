import { Router } from "express";
import { CategoryController } from "./Categories.controller";

const router = Router();

router.get("/categories",CategoryController.getAllCategory);
router.post("/categories",CategoryController.createCategory);
router.put("/categories",CategoryController.updateCategory);
router.delete("/categories/:id",CategoryController.deleteCategory);

export const CategoryRoute = router;