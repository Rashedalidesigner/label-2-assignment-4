import { Router } from "express";
import { userController } from "./User.controller";
import { authMiddleware } from "../../middleware/auth.middleware";


const router = Router();


router.post("/register",userController.UserCreated);
router.get("/",authMiddleware,userController.getAllUser);

export const userRote = router;