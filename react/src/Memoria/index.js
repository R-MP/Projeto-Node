import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Memoria() {
    const [memorias, setMemorias] = useState([]);

    useEffect(() => {
        async function fetchMemorias() {
            try {
                const response = await axios.get('http://localhost:4000/memoria');
                setMemorias(response.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }

        fetchMemorias();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/memoria/${id}`);
            const updatedMemorias = memorias.filter((memoria) => memoria.id !== id);
            setMemorias(updatedMemorias);
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
            <Link to="/memoriaCreate" class="btn-criar-nova">
                Criar Nova
            </Link>
        </div>
        <p class="retorno-api">Retorno da API: {JSON.stringify(memorias)}</p>
        <table class="tabela">
            <tbody>          
                <tr>
                    <td class="top center">ID</td>
                    <td class="top center"><strong>Modelo</strong></td>
                    <td class="top center"><strong>DDR</strong></td>
                    <td class="top center"><strong>Frequencia</strong></td>
                    <td class="top center"><strong>RAM</strong></td>
                    <td class="top center"><strong>Marca</strong></td>
                    <td class="top center" colspan="2" width="1"><strong>Ações</strong></td>
                </tr>
            
            </tbody>
            <tbody>
                {memorias.map((memoria) => (
                    
                    <tr key={memoria.id}> 
                        <td align="center">{memoria.id}</td>
                        <td align="center">{memoria.modelo}</td>
                        <td align="center">{memoria.ddr}</td>
                        <td align="center">{memoria.frequencia}</td>
                        <td align="center">{memoria.quantidadeRam}</td>
                        <td align="center">{memoria.marca}</td>
                        <td align="center"><Link to={`/memoriaUpdate/${memoria.id}`} class="btn btn-success">Alterar</Link>&nbsp;&nbsp;
                        <Link to={`/memoriaShow/${memoria.id}`} class="btn btn-primary">Ver</Link>&nbsp;&nbsp;
                        <button onClick={() => handleDelete(memoria.id)} class="btn btn-danger">Remover</button></td>
                    
                    </tr>


                ))}
            </tbody>
        </table>
        <footer><Link to="/" class="btn-voltar">Voltar</Link></footer>
        
    </div>

        );
    }

export default Memoria;
