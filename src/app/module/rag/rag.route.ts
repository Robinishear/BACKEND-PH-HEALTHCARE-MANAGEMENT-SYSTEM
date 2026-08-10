import { Router } from "express";
import { RagController } from "./reg.controller";

const router = Router();

router.get("/start", RagController.getStats);
router.post("/ingest-doctors", RagController.ingestDoctors);
router.post("/query1", RagController.queryRag);

export const ragRouter = router;
