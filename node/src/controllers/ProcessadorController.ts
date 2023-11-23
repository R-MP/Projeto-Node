import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

class ProcessadorController {
    async index(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.processador.findMany({
            orderBy: { modelo: 'asc' },
            select: {
                id: true,
                modelo: true,
                socket: true,
                arquitetura: true,
                nucleos: true,
                threads: true,
                frequencia: true,
                marca: true,
            },
        });
        res.status(200).json(dados);
    }

    async show(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { id } = req.params;
        const processador = await prisma.processador.findUnique({
            where: { id: Number(id) },
        });
        res.status(200).json(processador);
    }

    async store(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { modelo, socket, arquitetura, nucleos, threads, frequencia, marca } = req.body;
        const novoProcessador = await prisma.processador.create({
            data: {
                modelo,
                socket,
                arquitetura,
                nucleos,
                threads,
                frequencia,
                marca,
            },
        });
        res.status(201).json(novoProcessador);
    }

    async update(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { id } = req.params;
        const { modelo, socket, arquitetura, nucleos, threads, frequencia, marca } = req.body;
        const processadorAtualizado = await prisma.processador.update({
            where: { id: Number(id) },
            data: {
                modelo,
                socket,
                arquitetura,
                nucleos,
                threads,
                frequencia,
                marca,
            },
        });
        res.status(200).json(processadorAtualizado);
    }

    async delete(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { id } = req.params;
        await prisma.processador.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    }
}

export default ProcessadorController;
