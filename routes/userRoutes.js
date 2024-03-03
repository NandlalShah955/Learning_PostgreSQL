import express from "express";
import UserController from "../controllers/userController.js";
const router = express.Router();

router.post("/user/createuser", UserController.CreateUser);
router.get("/user/getusers", UserController.GetUser);
router.put("/user/updateusers", UserController.UpdateUser);
router.delete("/user/deleteuser", UserController.DeleteUser);

export default router;
