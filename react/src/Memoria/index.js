import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
        <div class="corpo">
    <Link to="/memoriaCreate" class="btn-criar-nova">Criar Nova</Link>
    <p class="retorno-api">Retorno da API: {JSON.stringify(memorias)}</p>
    <table class="tabela">
        <thead>
            <tr>
                <th>Memorias</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {memorias.map((memoria) => (
                <tr key={memoria.id}>
                    <td>{memoria.modelo}</td>
                    <td>
                        <Link to={`/memoriaUpdate/${memoria.id}`} class="btn-alterar">Alterar</Link>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(memoria.id)} class="btn-remover">Remover</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    <Link to="/" class="btn-voltar">Voltar</Link>
</div>

    );
}

export default Memoria;
