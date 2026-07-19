import { Router } from "express";
import { RentalRequestController } from "./Rental.controller";
import { auth } from "../../middleware/auth.middleware";

const router = Router();


router.post("/rentals",auth("TENANT"),RentalRequestController.sabmitRentalRequest);
router.get("/rentals",auth("TENANT"),RentalRequestController.geuserRentalRequest);
router.get("/rentals/:id",auth("TENANT"),RentalRequestController.geuserRentalRequestDetile);
router.get("/landlord/requests",auth("LANDLORD"),RentalRequestController.getlandlordRequest);
router.put("/landlord/requests/:id",auth("LANDLORD",),RentalRequestController.updaterentalrequest);

export const RentalRequestRoute = router;