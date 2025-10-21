import { Router } from "express";
import * as UserCtrl from "../controllers/user.controller";
import { authenticate, isAdmin } from "../middleware/auth.middleware";

const router = Router();

router.get("/me", authenticate, UserCtrl.getProfile);

// Admin only
router.get("/", authenticate, isAdmin, UserCtrl.getAllUsers);
router.patch("/:id/role", authenticate, isAdmin, UserCtrl.updateUserRole);
router.delete("/:id", authenticate, isAdmin, UserCtrl.deleteUser);

export default router;
