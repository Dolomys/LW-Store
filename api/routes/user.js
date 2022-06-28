import {verifyTokenAndAuthorization, verifyTokenAndAdmin} from "../middleware/token.middleware.js"
import {updateUser, deleteUser,getStats,getAllUsers,getUser} from "../controllers/user.controller.js"
import Router from 'express'

const router = Router()

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, getAllUsers);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, getStats);

export default router