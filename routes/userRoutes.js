import express from "express";
import UserController from "../controllers/userController.js";
const router = express.Router();

router.get("/user", UserController.CreateUser);
router.get("/user", UserController.GetUser);
router.get("/user", UserController.UpdateUser);
router.get("/user", UserController.DeleteUser);

export default router;
