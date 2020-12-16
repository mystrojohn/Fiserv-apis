import { NextFunction, Request, Response } from 'express';
import User from '../models/user';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Health check passed'
    });
};

const parseCheckv1 = (req: Request, res: Response, next: NextFunction) => {
    const usr = req.body.data;

    const fn = usr.indexOf("0") + 4;
    const firstName = usr.slice(0, fn);
    const lnStr = usr.slice(fn)
    const ln = lnStr.lastIndexOf("000") + 3;
    const lastName = lnStr.slice(0, ln);
    const clientId = lnStr.slice(ln + 1);

    const user = usr as User;

    return res.status(200).json({
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    });
};

const parseCheckv2 = (req: Request, res: Response, next: NextFunction) => {
    const usr = req.body.data;


    const fn = usr.indexOf("0");
    const firstName = usr.slice(0, fn);
    const lnStr = usr.slice(fn)
    const ln = lnStr.lastIndexOf("000");
    const lastName = lnStr.slice(4, ln);
    const clientId = lnStr.substr(ln + 3, 3) + "-" + lnStr.slice(ln + 6);

    const user = usr as User;

    return res.status(200).json({
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    });
};

export default { serverHealthCheck, parseCheckv1, parseCheckv2 };
