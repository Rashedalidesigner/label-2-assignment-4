import { Router } from "express";
import { userController } from "./User.controller";


const router = Router();


router.post("/register",userController.UserCreated);

export const userRote = router;