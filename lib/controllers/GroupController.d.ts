import { Request, Response } from 'express';
declare class GroupController {
    createGroup(req: Request, res: Response): Promise<void>;
    listGroups(req: Request, res: Response): Promise<void>;
    updateGroup(req: Request, res: Response): Promise<void>;
    deleteGroup(req: Request, res: Response): Promise<void>;
}
declare const _default: GroupController;
export default _default;
