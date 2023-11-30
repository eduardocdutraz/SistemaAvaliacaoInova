import { Prisma } from '@prisma/client';
declare class GroupService {
    constructor();
    listGroups(id?: string): Promise<{
        id: number;
        nome: string;
        resumo: string;
        nota: number;
    } | {
        id: number;
        nome: string;
        resumo: string;
        nota: number;
    }[] | null>;
    createGroup(group: Prisma.GroupCreateInput): Promise<{
        id: number;
        nome: string;
        resumo: string;
        nota: number;
    } | null>;
    updateGroup(id: string, group: Prisma.GroupUpdateInput): Promise<{
        id: number;
        nome: string;
        resumo: string;
        nota: number;
    } | null>;
    deleteGroup(id: string): Promise<{
        id: number;
        nome: string;
        resumo: string;
        nota: number;
    } | null>;
}
declare const _default: GroupService;
export default _default;
