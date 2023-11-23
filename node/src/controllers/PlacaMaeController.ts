import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

class PlacaMaeController {
    async index(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.placaMae.findMany({
            orderBy: { modelo: 'asc' },
            select: {
                id: true,
                modelo: true,
                socket: true,
                formato: true,
                slotRam: true,
                slotExp: true,
                marca: true,
            },
        });
        res.status(200).json(dados);
    }

    async show(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { id } = req.params;
        const placaMae = await prisma.placaMae.findUnique({
            where: { id: Number(id) },
        });
        res.status(200).json(placaMae);
    }

    async store(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { modelo, socket, formato, slotRam, slotExp, marca } = req.body;
        const novaPlacaMae = await prisma.placaMae.create({
            data: {
                modelo,
                socket,
                formato,
                slotRam,
                slotExp,
                marca,
            },
        });
        res.status(201).json(novaPlacaMae);
    }

    async update(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { id } = req.params;
        const { modelo, socket, formato, slotRam, slotExp, marca } = req.body;
        const placaMaeAtualizada = await prisma.placaMae.update({
            where: { id: Number(id) },
            data: {
                modelo,
                socket,
                formato,
                slotRam,
                slotExp,
                marca,
            },
        });
        res.status(200).json(placaMaeAtualizada);
    }

    async delete(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { id } = req.params;
        await prisma.placaMae.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    }
}

export default PlacaMaeController;
