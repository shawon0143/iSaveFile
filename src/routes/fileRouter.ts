import { Router } from 'express';
import { getFiles } from '../controllers/getFiles';

export const fileRouter = Router();

fileRouter.get('/',getFiles);

