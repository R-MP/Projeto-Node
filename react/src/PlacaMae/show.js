import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ShowPlacaMae() {
    const [placaMae, setPlacaMae] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function consultarPlacaMae() {
            try {
                const resposta = await axios.get(`http://localhost:4000/placa-mae/${id}`);
                setPlacaMae(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        consultarPlacaMae();
    }, [id]);

    return (
        <div>
            <p>{`Modelo: ${placaMae.modelo}`}</p>
            <p>{`Tamanho: ${placaMae.tamanho}`}</p>
            <p>{`Socket: ${placaMae.socket}`}</p>
            <p>{`Formato: ${placaMae.formato}`}</p>
            <p>{`Slot de RAM: ${placaMae.slotram}`}</p>
            <p>{`Slot de expansão: ${placaMae.slotexp}`}</p>
            <p>{`Marca: ${placaMae.marca}`}</p>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default ShowPlacaMae;
