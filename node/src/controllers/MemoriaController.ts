// Importa componentes do express
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

// Controller
class MemoriaController {
    // Funções CRUD
    async index(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.memoria.findMany({
            orderBy: { modelo: 'asc' },
            select: {
                id: true,
                modelo: true,
                ddr: true,
                frequencia: true,
                quantidadeRam: true,
                marca: true, // Incluído o campo marca na seleção
            },
        });
        res.status(200).json(dados);
    }

    async show(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.memoria.findUnique({
            where: { id: Number(req.params.id) },
            select: {
                id: true,
                modelo: true,
                ddr: true,
                frequencia: true,
                quantidadeRam: true,
                marca: true, // Incluído o campo marca na seleção
            },
        });
        res.status(200).json(dados);
    }

    async store(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { modelo, ddr, frequencia, quantidadeRam, marca } = req.body; // Adicionado o campo marca
        const novaMemoria = await prisma.memoria.create({
            data: {
                modelo: modelo,
                ddr: ddr,
                frequencia: frequencia,
                quantidadeRam: quantidadeRam,
                marca: marca, // Adicionado o campo marca
            },
            select: {
                id: true,
                modelo: true,
                ddr: true,
                frequencia: true,
                quantidadeRam: true,
                marca: true, // Incluído o campo marca na seleção
            },
        });
        res.status(200).json(novaMemoria);
    }

    async update(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { modelo, ddr, frequencia, quantidadeRam, marca } = req.body; // Adicionado o campo marca
        const memoriaAlterada = await prisma.memoria.update({
            where: { id: Number(req.params.id) },
            data: {
                modelo: modelo,
                ddr: ddr,
                frequencia: frequencia,
                quantidadeRam: quantidadeRam,
                marca: marca, // Adicionado o campo marca
            },
            select: {
                id: true,
                modelo: true,
                ddr: true,
                frequencia: true,
                quantidadeRam: true,
                marca: true, // Incluído o campo marca na seleção
            },
        });
        res.status(200).json(memoriaAlterada);
    }

    async delete(req: Request, res: Response) {
        const prisma = new PrismaClient();
        await prisma.memoria.delete({
            where: { id: Number(req.params.id) },
        });
        res.status(200).json({ excluido: true });
    }
}

export default MemoriaController;
