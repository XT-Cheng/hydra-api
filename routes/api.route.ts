import { NextFunction, Request, Response, Router } from 'express';

export class APIRoute {
    public static create(router: Router) {
        console.log('API route create');

        //Execute API
        router.post('/api', (req: Request, res: Response, next: NextFunction) => {
            APIRoute.execute(req, res, next);
        });
    }

    private static execute(req: Request, res: Response, next: NextFunction) {
       
    }
}