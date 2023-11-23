import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
        <div className="corpo">
            <Link to="/processadorCreate" className="btn-criar-nova">Criar Novo</Link>
            <p className="retorno-api">Retorno da API: {JSON.stringify(processadores)}</p>
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Processadores</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {processadores.map((processador) => (
                        <tr key={processador.id}>
                            <td>{processador.modelo}</td>
                            <td>
                                <Link to={`/processadorUpdate/${processador.id}`} className="btn-alterar">Alterar</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(processador.id)} className="btn-remover">Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/" className="btn-voltar">Voltar</Link>
        </div>
    );
}

export default Processador;
