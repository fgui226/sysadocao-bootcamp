import { Router } from "express";
import { AdotanteController } from "../controllers/AdotanteController.js";

const router = Router();
const adotanteController = new AdotanteController();

router.get('/Adotantes', adotanteController.getAdotantes);
router.get('/Adotante/:id', adotanteController.getAdotanteById);
router.post('/Adotante', adotanteController.postAdotante);
router.put('/Adotante/:id', adotanteController.putAdotante);
router.delete('/Adotante/:id', adotanteController.deleteAdotante);

export { router };