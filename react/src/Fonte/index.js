import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function Fonte() {
    const [fontes, setFontes] = useState([]);

    useEffect(() => {
        async function fetchFontes() {
            try {
                const response = await axios.get('http://localhost:4000/fonte');
                setFontes(response.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }

        fetchFontes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/fonte/${id}`);
            const updatedFontes = fontes.filter((fonte) => fonte.id !== id);
            setFontes(updatedFontes);
        } catch (error) {
            console.error(`Erro ao excluir: ${error}`);
        }
    };

    return (
        
        <div style={{ padding: '40px' }}>
            <br></br>
            <br></br>
            <br></br>
        <div class="crtNew">
            <Link to="/fonteCreate" class="btn-criar-nova">
                Criar Nova
            </Link>
        </div>
        <p class="retorno-api">Retorno da API: {JSON.stringify(fontes)}</p>
        <table class="tabela">
            <tbody>          
                <tr>
                    <td class="top center">ID</td>
                    <td class="top center"><strong>Modelo</strong></td>
                    <td class="top center"><strong>Potencia</strong></td>
                    <td class="top center"><strong>Formato</strong></td>
                    <td class="top center"><strong>Marca</strong></td>
                    <td class="top center" colspan="2" width="1"><strong>Ações</strong></td>
                </tr>
            
            </tbody>
            <tbody>
                {fontes.map((fonte) => (
                    
                    <tr key={fonte.id}> 
                        <td align="center">{fonte.id}</td>
                        <td align="center">{fonte.modelo}</td>
                        <td align="center">{fonte.potencia}</td>
                        <td align="center">{fonte.formato}</td>
                        <td align="center">{fonte.marca}</td>
                        <td align="center"><Link to={`/fonteUpdate/${fonte.id}`} class="btn-alterar">Alterar</Link>
                        <Link to={`/fonteDelete/${fonte.id}`} class="btn-remover">Remover</Link></td>
                    
                    </tr>


                ))}
            </tbody>
        </table>
        <footer><Link to="/" class="btn-voltar">Voltar</Link></footer>
        
    </div>

        );
    }

export default Fonte;
