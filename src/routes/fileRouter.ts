import { Router } from 'express';
import { getFiles, downloadFile, uploadFile, deleteFile, multerUploadInstance } from '../controllers/files';


export const fileRouter = Router();

fileRouter.get('/', getFiles);

fileRouter.get("/download/:path(*)", downloadFile);

fileRouter.post("/uploadFile/:path(*)", multerUploadInstance.single("myFile"), uploadFile);

fileRouter.get("/delete/:path(*)", deleteFile);
