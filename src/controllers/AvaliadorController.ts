import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import AvaliadorService from '../services/AvaliadorService';

class AvaliadorController {
    async createAvaliador(req: Request, res: Response) {
        const dados: Prisma.AvaliadorCreateInput = req.body;

        try {
            const newAvaliador = await AvaliadorService.createAvaliador(dados);
            res.status(200).json({
                status: 'ok',
                newAvaliador: newAvaliador
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async listAvaliadores(_: Request, res: Response) {
        try {
            const avaliadores = await AvaliadorService.listAvaliadores();
    
            res.status(200).json({
                status: 'ok',
                avaliadores: avaliadores
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async updateAvaliador(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.AvaliadorUpdateInput = req.body;

        try {
            const avaliadorAtualizado = await AvaliadorService.updateAvaliador(id, dados);
            res.status(200).json({
                status: 'ok',
                avaliadorAtualizado: avaliadorAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async deleteAvaliador(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const avaliadorDeletado = await AvaliadorService.deleteAvaliador(id);
            res.status(200).json({
                status: 'ok',
                avaliadorDeletado: avaliadorDeletado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }
}

export default new AvaliadorController();
