import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function PlacaMae() {
    const [placasMae, setPlacasMae] = useState([]);

    useEffect(() => {
        async function fetchPlacasMae() {
            try {
                const response = await axios.get('http://localhost:4000/placa-mae');
                setPlacasMae(response.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }

        fetchPlacasMae();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/placa-mae/${id}`);
            const updatedPlacasMae = placasMae.filter((placaMae) => placaMae.id !== id);
            setPlacasMae(updatedPlacasMae);
        } catch (error) {
            console.error(`Erro ao excluir: ${error}`);
        }
    };

    return (
        <div class="corpo">
            <Link to="/placa-maeCreate" class="btn-criar-nova">Criar Nova</Link>
            <p class="retorno-api">Retorno da API: {JSON.stringify(placasMae)}</p>
            <table class="tabela">
                <thead>
                    <tr>
                        <th>Placas Mãe</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {placasMae.map((placaMae) => (
                        <tr key={placaMae.id}>
                            <td>{placaMae.modelo}</td>
                            <td>
                                <Link to={`/placa-maeUpdate/${placaMae.id}`} class="btn-alterar">Alterar</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(placaMae.id)} class="btn-remover">Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/" class="btn-voltar">Voltar</Link>
        </div>
    );
}

export default PlacaMae;
