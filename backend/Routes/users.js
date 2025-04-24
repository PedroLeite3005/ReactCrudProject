import express from "express";
import { getUsers, deleteUser, updateUser, createUser } from "../Controllers/users.js";

const router = express.Router()

router.get("/", getUsers)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)
router.post("/insert", createUser) 

export default router