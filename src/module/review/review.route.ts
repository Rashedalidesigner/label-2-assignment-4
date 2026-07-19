import { Router } from "express";
import { ReviewController } from "./review.controller";
import { auth } from "../../middleware/auth.middleware";

const router = Router();

router.post("/reviews",auth("TENANT"),ReviewController.createReview);

export const ReviewRoute = router;