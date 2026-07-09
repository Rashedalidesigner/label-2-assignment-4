import { Router } from "express";
import { PropertiesControler } from "./Properties.controller";

const router = Router();

router.post("/landlord/properties", PropertiesControler.CreateProperties);
router.put("/landlord/properties/:id",PropertiesControler.updateProperties);
router.delete("/landlord/properties/:id",PropertiesControler.deleteProperties);
router.get("/properties",PropertiesControler.getAllProperties);
router.get("/properties/:id",PropertiesControler.getPropertiesDetiles);

export const PropertiesRoute = router;