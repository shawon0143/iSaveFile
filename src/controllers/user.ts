import { Request, Response } from 'express';
import * as session from 'express-session';

const { validationResult } = require('express-validator');
const { username, password } = require('../../config');


export function authUser(req: any, res: Response) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('there is error');
        res.render('pages/index.ejs', {Error: 'Please enter data.'})
    } else {
        const name  = req.body.username;
        const pass = req.body.password;
        if (name === username && pass === password) {
            req.session.user = name;
            req.session.admin = true;
            res.redirect('/my-drive');
        } else {
            res.render('pages/loginFailed.ejs', {data: 'Invalid credentials'});
        }
    }

    res.end();
}

