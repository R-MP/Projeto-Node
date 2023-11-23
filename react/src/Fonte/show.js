import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Show() {
    const [fonte, setFonte] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function consultarFonte() {
            try {
                const resposta = await axios.get(`http://localhost:4000/fonte/${id}`);
                setFonte(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        consultarFonte();
    }, [id]);

    return (
        <div>
            <p>{`Modelo: ${fonte.modelo}`}</p>
            <p>{`Potência: ${fonte.potencia}`}</p>
            <p>{`Formato: ${fonte.formato}`}</p>
            <p>{`Marca: ${fonte.marca}`}</p>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default Show;
