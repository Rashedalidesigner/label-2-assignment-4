import { Router } from "express";
import { PropertiesControler } from "./Properties.controller";
import { auth } from "../../middleware/auth.middleware";

const router = Router();

router.post("/landlord/properties",auth("ADMIN","LANDLORD"), PropertiesControler.CreateProperties);
router.put("/landlord/properties/:id",auth("ADMIN","LANDLORD"),PropertiesControler.updateProperties);
router.delete("/landlord/properties/:id",auth("ADMIN","LANDLORD"),PropertiesControler.deleteProperties);
router.get("/properties",PropertiesControler.getAllProperties);
router.get("/properties/:id",PropertiesControler.getPropertiesDetiles);

export const PropertiesRoute = router;