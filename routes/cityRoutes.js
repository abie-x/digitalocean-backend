import express from "express";
const router = express.Router()
import { findCity } from "../controllers/cityController.js";

router.post('/', findCity)

export default router