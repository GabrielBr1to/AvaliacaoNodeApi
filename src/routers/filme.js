import express from "express";
import ControllerFilme from "../controllers/filme.js"
const router = express.Router();

const controllers = new ControllerFilme();

router.post("/filme", ControllerFilme.adicionar);

export default router;