import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Fonte() {
    const [fontes, setFontes] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState('');
    const [componentes, setComponentes] = useState([]);

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

    const handleComponentChange = (event) => {
        setSelectedComponent(event.target.value);
    };

    return (
        <div style={{ padding: '60px' }}>
            <br></br>
            <br></br>
            <br></br>
            <div className="crtNew">
                <Link to="/fonteCreate" className="btn-criar-nova">
                    Criar Nova
                </Link>
            </div>
            <div className="component-select">
                <label htmlFor="componentSelect">Selecione os componentes:</label>
                <select id="componentSelect" value={selectedComponent} onChange={handleComponentChange}>
                    <option value="">Selecione um componente</option>
                    {fontes.map((fonte) => (
                        <option key={fonte.id} value={fonte.id}>
                            {fonte.modelo}
                        </option>
                    ))}
                    
                </select>
            </div>
            <p className="retorno-api">Retorno da API: {JSON.stringify(fontes)}</p>
            <table className="tabela">
                <tbody>
                    <tr>
                        <td className="top center">ID</td>
                        <td className="top center"><strong>Modelo</strong></td>
                        <td className="top center"><strong>Potencia</strong></td>
                        <td className="top center"><strong>Formato</strong></td>
                        <td className="top center"><strong>Marca</strong></td>
                        <td className="top center" colSpan="2" width="1"><strong>Ações</strong></td>
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
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <footer>
                <Link to="/" className="btn-voltar">
                    Voltar
                </Link>
            </footer>
        </div>
    );
}

export default Fonte;
