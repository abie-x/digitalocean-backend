import express from "express";
const router = express.Router()
import { redirectUser, registerUser } from "../controllers/userController.js";

router.post('/', registerUser)
router.get('/verify', redirectUser)

export default router