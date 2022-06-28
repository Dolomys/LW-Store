import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/token.middleware.js"

import { createO, updateO, deleteO, getUserO, getAllO, getIncome} from '../controllers/order.controller.js'

import { Router } from "express";

const router = Router()

//CREATE

router.post("/", verifyToken, createO);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateO);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteO);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserO);

// //GET ALL

router.get("/", verifyTokenAndAdmin, getAllO);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, getIncome);

export default router