import { Prisma } from '@prisma/client';
declare class AvaliadorService {
    constructor();
    listAvaliadores(id?: string): Promise<{
        id: number;
        nome: string;
        notas: number;
    } | {
        id: number;
        nome: string;
        notas: number;
    }[] | null>;
    createAvaliador(avaliador: Prisma.AvaliadorCreateInput): Promise<{
        id: number;
        nome: string;
        notas: number;
    } | null>;
    updateAvaliador(id: string, avaliador: Prisma.AvaliadorUpdateInput): Promise<{
        id: number;
        nome: string;
        notas: number;
    } | null>;
    deleteAvaliador(id: string): Promise<{
        id: number;
        nome: string;
        notas: number;
    } | null>;
}
declare const _default: AvaliadorService;
export default _default;
