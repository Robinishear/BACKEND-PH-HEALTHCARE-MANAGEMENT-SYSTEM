import { Router } from "express";
import { regController } from "./reg.controller";

const router = Router();

router.get("/start", regController.regStart);
router.post("/ingest-doctors", regController.ingressDoctors);

export const regRouter = router;