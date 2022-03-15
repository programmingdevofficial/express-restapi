import express from "express";
import {createUser, deleteUser, getUsers, updateUser, getUser} from "../controller/users";

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;