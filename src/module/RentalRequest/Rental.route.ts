import { Router } from "express";
import { RentalRequestController } from "./Rental.controller";

const router = Router();


router.post("/",RentalRequestController.sabmitRentalRequest);
router.get("/",RentalRequestController.getallRentalRequest);
router.get("/:id",RentalRequestController.getDetileRentalRequest);

export const RentalRequestRoute = router;