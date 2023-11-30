import { Prisma } from '@prisma/client';
declare class AlunoService {
    constructor();
    listAlunos(id?: string): Promise<{
        matricula: number;
        nome: string;
        nota: number;
        grupoId: number;
    } | {
        matricula: number;
        nome: string;
        nota: number;
        grupoId: number;
    }[] | null>;
    createAluno(aluno: Prisma.AlunoCreateInput): Promise<{
        matricula: number;
        nome: string;
        nota: number;
        grupoId: number;
    } | null>;
    updateAluno(id: string, aluno: Prisma.AlunoUpdateInput): Promise<{
        matricula: number;
        nome: string;
        nota: number;
        grupoId: number;
    } | null>;
    deleteAluno(id: string): Promise<{
        matricula: number;
        nome: string;
        nota: number;
        grupoId: number;
    } | null>;
}
declare const _default: AlunoService;
export default _default;
