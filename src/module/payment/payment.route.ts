import { Router } from "express";
import { auth } from "../../middleware/auth.middleware";
import { paymentControler } from "./payment.controller";

const router = Router();

router.post(
  "/create",
  auth("TENANT"),
  paymentControler.createPayment
);

router.post(
  "/confirm",
  auth("LANDLORD","TENANT"),
  paymentControler.confirmPayment
);

router.get(
  "/",
  auth("ADMIN","LANDLORD","TENANT"),
  paymentControler.getPayments
);

router.get(
  "/:id",
  auth("TENANT","ADMIN","LANDLORD"),
  paymentControler.getPayment
);

export const paymentrouter = router;