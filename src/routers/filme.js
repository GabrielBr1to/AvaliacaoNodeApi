import express from "express";
import ControllerFilme from "../controllers/filme.js"
const router = express.Router();

const controllers = new ControllerFilme();

router.post("/api/cartaz");

export default router;