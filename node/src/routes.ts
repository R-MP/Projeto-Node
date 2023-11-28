import { Router } from 'express';
import LivroController from './controllers/LivroController';
import FonteController from './controllers/FonteController';
import MemoriaController from './controllers/MemoriaController';
import PlacaMaeController from './controllers/PlacaMaeController';
import ProcessadorController from './controllers/ProcessadorController';

const Routes = Router();

// Livros
const livroController = new LivroController();
Routes.get('/livro', livroController.index);
Routes.get('/livro/:id', livroController.show);
Routes.post('/livro', livroController.store);
Routes.put('/livro/:id', livroController.update);
Routes.delete('/livro/:id', livroController.delete);

// Fontes
const fonteController = new FonteController();
Routes.get('/fonte', fonteController.index);
Routes.get('/fonte/:id', fonteController.show);
Routes.post('/fonte', fonteController.store);
Routes.put('/fonte/:id', fonteController.update);
Routes.delete('/fonte/:id', fonteController.delete);

// Memórias
const memoriaController = new MemoriaController();
Routes.get('/memoria', memoriaController.index);
Routes.get('/memoria/:id', memoriaController.show);
Routes.post('/memoria', memoriaController.store);
Routes.put('/memoria/:id', memoriaController.update);
Routes.delete('/memoria/:id', memoriaController.delete);

// Placas Mãe
const placaMaeController = new PlacaMaeController();
Routes.get('/placaMae', placaMaeController.index);
Routes.get('/placaMae/:id', placaMaeController.show);
Routes.post('/placaMae', placaMaeController.store);
Routes.put('/placaMae/:id', placaMaeController.update);
Routes.delete('/placaMae/:id', placaMaeController.delete);

// Processadores
const processadorController = new ProcessadorController();
Routes.get('/processador', processadorController.index);
Routes.get('/processador/:id', processadorController.show);
Routes.post('/processador', processadorController.store);
Routes.put('/processador/:id', processadorController.update);
Routes.delete('/processador/:id', processadorController.delete);

export default Routes;
