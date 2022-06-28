import {verifyTokenAndAdmin} from '../middleware/token.middleware.js'

import Router from 'express'
import { createP, updateP, deleteP, getP , getAllP } from '../controllers/product.controller.js';

const router = Router()

//CREATE

router.post("/", verifyTokenAndAdmin, createP);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateP);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteP);

//GET PRODUCT
router.get("/find/:id", getP);

//GET ALL PRODUCTS
router.get("/", getAllP);

export default router