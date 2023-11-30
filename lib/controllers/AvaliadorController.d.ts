import { Request, Response } from 'express';
declare class AvaliadorController {
    createAvaliador(req: Request, res: Response): Promise<void>;
    listAvaliadores(req: Request, res: Response): Promise<void>;
    updateAvaliador(req: Request, res: Response): Promise<void>;
    deleteAvaliador(req: Request, res: Response): Promise<void>;
}
declare const _default: AvaliadorController;
export default _default;
