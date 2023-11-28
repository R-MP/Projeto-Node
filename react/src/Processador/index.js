import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Processador() {
    const [processadores, setProcessadores] = useState([]);

    useEffect(() => {
        async function fetchProcessadores() {
            try {
                const response = await axios.get('http://localhost:4000/processador');
                setProcessadores(response.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }

        fetchProcessadores();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/processador/${id}`);
            const updatedProcessadores = processadores.filter((processador) => processador.id !== id);
            setProcessadores(updatedProcessadores);
        } catch (error) {
            console.error(`Erro ao excluir: ${error}`);
        }
    };

    return (
        
        <div style={{ padding: '60px' }}>
        
            <br></br>
            <br></br>
            <br></br>
        <div class="crtNew">
            <Link to="/processadorCreate" class="btn-criar-nova">
                Criar Nova
            </Link>
        </div>
        <p class="retorno-api">Retorno da API: {JSON.stringify(processadores)}</p>
        <table class="tabela">
            <tbody>          
                <tr>
                    <td class="top center">ID</td>
                    <td class="top center"><strong>Modelo</strong></td>
                    <td class="top center"><strong>Socket</strong></td>
                    <td class="top center"><strong>Arquitetura</strong></td>
                    <td class="top center"><strong>Núcleos</strong></td>
                    <td class="top center"><strong>Threads</strong></td>
                    <td class="top center"><strong>Frequencia</strong></td>
                    <td class="top center"><strong>Marca</strong></td>
                    <td class="top center" colspan="2" width="1"><strong>Ações</strong></td>
                </tr>
            
            </tbody>
            <tbody>
                {processadores.map((processador) => (
                    
                    <tr key={processador.id}> 
                        <td align="center">{processador.id}</td>
                        <td align="center">{processador.modelo}</td>
                        <td align="center">{processador.socket}</td>
                        <td align="center">{processador.arquitetura}</td>
                        <td align="center">{processador.nucleos}</td>
                        <td align="center">{processador.threads}</td>
                        <td align="center">{processador.frequencia}</td>
                        <td align="center">{processador.marca}</td>
                        <td align="center"><Link to={`/processadorUpdate/${processador.id}`} class="btn btn-success">Alterar</Link>&nbsp;&nbsp;
                        <Link to={`/processadoreshow/${processador.id}`} class="btn btn-primary">Ver</Link>&nbsp;&nbsp;
                        <button onClick={() => handleDelete(processador.id)} class="btn btn-danger">Remover</button></td>
                    
                    </tr>


                ))}
            </tbody>
        </table>
        <footer><Link to="/" class="btn-voltar">Voltar</Link></footer>
        
    </div>

        );
    }

export default Processador;
