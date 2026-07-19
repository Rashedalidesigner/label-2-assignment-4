import { Router } from "express";
import { auth } from "../../middleware/auth.middleware";
import { paymentControler } from "./payment.controller";

const router = Router();

router.post(
  "/payments/create",
  auth("TENANT"),
  paymentControler.createPayment
);

router.post(
  "/payments/confirm",
  auth("LANDLORD","TENANT"),
  paymentControler.confirmPayment
);

router.get(
  "/payments/",
  auth("TENANT"),
  paymentControler.getPayments
);

router.get(
  "/:id",
  auth("TENANT","ADMIN","LANDLORD"),
  paymentControler.getPayment
);

export const paymentrouter = router;