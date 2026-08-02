import { Router } from "express";
import { regController } from "./reg.controller";

const router = Router();

router.get("/start", regController.regStart);

export const regRouter = router;