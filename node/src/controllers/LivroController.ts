// Importa componentes do express
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
// Controller
class LivroController {
    // Funções CRUD
    async index(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const dados = await prisma.livro.findMany( // recupera todos os produto
            {
                orderBy: { titulo: 'asc' },
                select: {
                    titulo: true, // seleciona as propriedade desejadas de Produto
                    isbn: true,
                    anoEdicao: true,
                    editora: true
                }
            }
        );
        res.status(200).json(dados);
    }
    async show(req: Request, res: Response) {
        const prisma = new PrismaClient()
        const dados = await prisma.livro.findUnique(
            {
                where: { id: Number(req.params.id) },
                select: {
                    id: true,
                    titulo: true,
                    isbn: true,
                    anoEdicao: true,
                    editora: true
                }
            }
        );
        res.status(200).json(dados)
    }
    async store(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { titulo, isbn, anoEdicao, editora } = req.body;
        const novoLivro = await prisma.livro.create(
            {
                data: {
                    titulo: titulo,
                    isbn: isbn,
                    anoEdicao: Number(anoEdicao),
                    editora: editora
                },
                select: {
                    id: true,
                    titulo: true,
                    isbn: true,
                    anoEdicao: true,
                    editora: true// traz todos os dados de catedoria
                }
            }
        );
        res.status(200).json(novoLivro);
    }
    async update(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { titulo, isbn, anoEdicao, editora } = req.body;
        const livroAlterado = await prisma.livro.update(
            {
                where: { id: Number(req.params.id) },
                data: {
                    titulo: titulo,
                    isbn: isbn,
                    anoEdicao: anoEdicao,
                    editora: editora
                },
                select: {
                    id: true,
                    titulo: true,
                    isbn: true,
                    anoEdicao: true,
                    editora: true
                }
            }
        );
        res.status(200).json(livroAlterado);
    }

    async delete(req: Request, res: Response) {
        const prisma = new PrismaClient();
        await prisma.livro.delete(
            {
                where: { id: Number(req.params.id) }
            }
        );
        res.status(200).json({ excluido: true });
    }
}

export default LivroController