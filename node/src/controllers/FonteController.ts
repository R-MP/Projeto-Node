// Importa componentes do express
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

// Controller
class FonteController {
    // Funções CRUD
    async index(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.fonte.findMany({
            orderBy: { modelo: 'asc' },
            select: {
                id: true,
                modelo: true,
                potencia: true,
                formato: true,
                marca: true,
            },
        });
        res.status(200).json(dados);
    }

    async show(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.fonte.findUnique({
            where: { id: Number(req.params.id) },
            select: {
                id: true,
                modelo: true,
                potencia: true,
                formato: true,
                marca: true,
            },
        });
        res.status(200).json(dados);
    }

    async store(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { modelo, potencia, formato, marca } = req.body;
        const novaFonte = await prisma.fonte.create({
            data: {
                modelo: modelo,
                potencia: potencia,
                formato: formato,
                marca: marca,
            },
            select: {
                id: true,
                modelo: true,
                potencia: true,
                formato: true,
                marca: true,
            },
        });
        res.status(200).json(novaFonte);
    }

    async update(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { modelo, potencia, formato, marca } = req.body;
        const fonteAlterada = await prisma.fonte.update({
            where: { id: Number(req.params.id) },
            data: {
                modelo: modelo,
                potencia: potencia,
                formato: formato,
                marca: marca,
            },
            select: {
                id: true,
                modelo: true,
                potencia: true,
                formato: true,
                marca: true,
            },
        });
        res.status(200).json(fonteAlterada);
    }

    async delete(req: Request, res: Response) {
        const prisma = new PrismaClient();
        await prisma.fonte.delete({
            where: { id: Number(req.params.id) },
        });
        res.status(200).json({ excluido: true });
    }
}

export default FonteController;
