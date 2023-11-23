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
        <div class="corpo">
    <Link to="/fonteCreate" class="btn-criar-nova">Criar Nova</Link>
    <p class="retorno-api">Retorno da API: {JSON.stringify(fontes)}</p>
    <table class="tabela">
        <thead>
            <tr>
                <th>Fontes</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {fontes.map((fonte) => (
                <tr key={fonte.id}>
                    <td>{fonte.modelo}</td>
                    <td>
                        <Link to={`/fonteUpdate/${fonte.id}`} class="btn-alterar">Alterar</Link>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(fonte.id)} class="btn-remover">Remover</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    <Link to="/" class="btn-voltar">Voltar</Link>
</div>

    );
}

export default Fonte;
