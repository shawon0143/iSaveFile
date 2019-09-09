import { Router } from 'express';
import { authUser } from '../controllers/user';
const { check } = require('express-validator');

export const userRouter = Router();


userRouter.post('/',[
    check('username').trim().escape().isLength({ min: 1 }),
    check('password').trim().escape().isLength({ min: 1 })
], authUser);
