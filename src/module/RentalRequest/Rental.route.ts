import { Router } from "express";
import { RentalRequestController } from "./Rental.controller";
import { auth } from "../../middleware/auth.middleware";

const router = Router();


router.post("/rentals",auth("TENANT"),RentalRequestController.sabmitRentalRequest);
router.get("/rentals",RentalRequestController.getallRentalRequest);
router.get("/:id",RentalRequestController.getDetileRentalRequest);
router.get("/landlord/requests",auth("LANDLORD"),RentalRequestController.getlandlordRequest)

export const RentalRequestRoute = router;