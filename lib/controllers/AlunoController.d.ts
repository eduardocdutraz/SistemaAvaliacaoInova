import { Request, Response } from 'express';
declare class AlunoController {
    createAluno(req: Request, res: Response): Promise<void>;
    listAlunos(req: Request, res: Response): Promise<void>;
    updateAluno(req: Request, res: Response): Promise<void>;
    deleteAluno(req: Request, res: Response): Promise<void>;
}
declare const _default: AlunoController;
export default _default;
