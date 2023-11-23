import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ShowProcessador() {
    const [processador, setProcessador] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function consultarProcessador() {
            try {
                const resposta = await axios.get(`http://localhost:4000/processador/${id}`);
                setProcessador(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        consultarProcessador();
    }, [id]);

    return (
        <div>
            <p>{`Modelo: ${processador.modelo}`}</p>
            <p>{`Socket: ${processador.socket}`}</p>
            <p>{`Arquitetura: ${processador.arquitetura}`}</p>
            <p>{`Núcleos: ${processador.nucleos}`}</p>
            <p>{`Threads: ${processador.threads}`}</p>
            <p>{`Frequência: ${processador.frequencia}`}</p>
            <p>{`Marca: ${processador.marca}`}</p>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default ShowProcessador;
