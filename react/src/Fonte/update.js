import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Update() {
    const [status, setStatus] = useState({});
    const { id } = useParams();
    const [dados, setDados] = useState({ id: 0, modelo: "", potencia: 0, formato: "", marca: "" });

    useEffect(() => {
        async function consultar() {
            try {
                const resposta = await axios.get(`http://localhost:4000/fonte/${id}`);
                setDados(resposta.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }
        consultar();
    }, [id]);

    return (
        <div class="corpo">
    <form onSubmit={gravar} class='formulario'>
        <label for="modelo">Modelo:</label>
        <input id="modelo" class="input-field" value={dados?.modelo || ''} type="text" required onChange={(e) => setDados({ ...dados, modelo: e.target.value })} />

        <label for="potencia">Potência:</label>
        <input id="potencia" class="input-field" value={dados?.potencia || ''} type="number" required onChange={(e) => setDados({ ...dados, potencia: e.target.value })} />

        <label for="formato">Formato:</label>
        <input id="formato" class="input-field" value={dados?.formato || ''} type="text" required onChange={(e) => setDados({ ...dados, formato: e.target.value })} />

        <label for="marca">Marca:</label>
        <input id="marca" class="input-field" value={dados?.marca || ''} type="text" required onChange={(e) => setDados({ ...dados, marca: e.target.value })} />

        <button type='submit' class="submit-btn">Enviar</button>
    </form>

    {dados && (
        <div>
            <p>Modelo: {dados.modelo}</p>
            <p>Potência: {dados.potencia}</p>
            <p>Formato: {dados.formato}</p>
            <p>Marca: {dados.marca}</p>
        </div>
    )}

    <p>{status.fonte}</p>

    <a href='/fonte' class='voltar'>Voltar</a>
</div>

    )

    async function gravar(e) {
        e.preventDefault();
        try {
            const resposta = await axios.put(`http://localhost:4000/fonte/${id}`, dados);
            setStatus(resposta.data);
            console.log(resposta);
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Update;