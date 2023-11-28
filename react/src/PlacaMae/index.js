import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function PlacaMae() {
    const [placaMaes, setPlacaMaes] = useState([]);

    useEffect(() => {
        async function fetchPlacaMaes() {
            try {
                const response = await axios.get('http://localhost:4000/placaMae');
                setPlacaMaes(response.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }

        fetchPlacaMaes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/placaMae/${id}`);
            const updatedPlacaMaes = placaMaes.filter((placaMae) => placaMae.id !== id);
            setPlacaMaes(updatedPlacaMaes);
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
            <Link to="/placaMaeCreate" class="btn-criar-nova">
                Criar Nova
            </Link>
        </div>
        <p class="retorno-api">Retorno da API: {JSON.stringify(placaMaes)}</p>
        <table class="tabela">
            <tbody>          
                <tr>
                    <td class="top center">ID</td>
                    <td class="top center"><strong>Modelo</strong></td>
                    <td class="top center"><strong>Socket</strong></td>
                    <td class="top center"><strong>Formato</strong></td>
                    <td class="top center"><strong>RAM</strong></td>
                    <td class="top center"><strong>Expansão</strong></td>
                    <td class="top center"><strong>Marca</strong></td>
                    <td class="top center" colspan="2" width="1"><strong>Ações</strong></td>
                </tr>
            
            </tbody>
            <tbody>
                {placaMaes.map((placaMae) => (
                    
                    <tr key={placaMae.id}> 
                        <td align="center">{placaMae.id}</td>
                        <td align="center">{placaMae.modelo}</td>
                        <td align="center">{placaMae.socket}</td>
                        <td align="center">{placaMae.formato}</td>
                        <td align="center">{placaMae.slotRam}</td>
                        <td align="center">{placaMae.slotExp}</td>
                        <td align="center">{placaMae.marca}</td>
                        <td align="center"><Link to={`/placaMaeUpdate/${placaMae.id}`} class="btn btn-success">Alterar</Link>&nbsp;&nbsp;
                        <Link to={`/placaMaeShow/${placaMae.id}`} class="btn btn-primary">Ver</Link>&nbsp;&nbsp;
                        <button onClick={() => handleDelete(placaMae.id)} class="btn btn-danger">Remover</button></td>
                    
                    </tr>


                ))}
            </tbody>
        </table>
        <footer><Link to="/" class="btn-voltar">Voltar</Link></footer>
        
    </div>

        );
    }

export default PlacaMae;
