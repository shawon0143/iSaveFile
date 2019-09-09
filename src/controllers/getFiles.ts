import { Request, Response } from 'express';

export function getFiles(req: Request, res: Response) {
    res.send({
        files: [
            {id:1, name: 'mercedes'},
            {id:2, name: 'BMW'}
        ]
    });
}