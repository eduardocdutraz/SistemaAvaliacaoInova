import { Router, Request, Response } from 'express';
import AvaliadorController from '../controllers/AvaliadorController';

const AvaliadorRouter = Router();

AvaliadorRouter.get('/avaliadores', async (req: Request, res: Response) => {
  try {
    const avaliadores = await AvaliadorController.listAvaliadores(req, res);
    res.json({ status: 'ok', avaliadores });
  } catch (error) {
    console.error('Erro ao listar avaliadores:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

AvaliadorRouter.post('/avaliador', async (req: Request, res: Response) => {
  try {
    const avaliador = await AvaliadorController.createAvaliador(req, res);
    res.json({ status: 'ok', avaliador });
  } catch (error) {
    console.error('Erro ao criar avaliador:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

AvaliadorRouter.put('/avaliador/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o avaliador com o ID fornecido
    res.json({ status: 'ok', message: 'Avaliador atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar avaliador:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

AvaliadorRouter.delete('/avaliador/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o avaliador com o ID fornecido
    res.json({ status: 'ok', message: 'Avaliador excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir avaliador:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

export default AvaliadorRouter;
