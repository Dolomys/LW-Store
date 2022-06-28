import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/token.middleware.js"

import {createC, updateC, deleteC, getUserC, getAllC} from "../controllers/cart.controller.js"

import Router from 'express'

const router = Router()

//CREATE

router.post("/", verifyToken, createC);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateC);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteC);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, getUserC);

// //GET ALL

router.get("/", verifyTokenAndAdmin, getAllC);

export default router