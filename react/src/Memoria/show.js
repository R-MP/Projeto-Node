import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Show() {
    const [memoria, setMemoria] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function consultarMemoria() {
            try {
                const resposta = await axios.get(`http://localhost:4000/memoria/${id}`);
                setMemoria(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        consultarMemoria();
    }, [id]);

    return (
        <div>
            <p>{`Modelo: ${memoria.modelo}`}</p>
            <p>{`DDR: ${memoria.ddr}`}</p>
            <p>{`Frequência: ${memoria.frequencia}`}</p>
            <p>{`Quantidade de RAM: ${memoria.quantidadeRam}`}</p>
            <p>{`Marca: ${memoria.marca}`}</p>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default Show;
