import { Router } from "express";
import { ReviewController } from "./review.controller";

const router = Router();

router.post("/reviews",ReviewController.createReview);

export const ReviewRoute = router;