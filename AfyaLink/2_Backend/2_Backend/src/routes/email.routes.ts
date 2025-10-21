import { Router } from "express";
import * as EmailCtrl from "../controllers/email.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/test", authenticate, EmailCtrl.testEmail);

export default router;
