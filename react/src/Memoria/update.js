import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Update() {
    const [status, setStatus] = useState({});
    const { id } = useParams();
    const [dados, setDados] = useState({ id: 0, capacidade: 0, tipo: "", velocidade: 0, marca: "" });

    useEffect(() => {
        async function consultar() {
            try {
                const resposta = await axios.get(`http://localhost:4000/memoria/${id}`);
                setDados(resposta.data);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        }
        consultar();
    }, [id]);

    return (
        <div className="corpo">
            <form onSubmit={gravar} className='formulario'>
                <label htmlFor="capacidade">Capacidade:</label>
                <input id="capacidade" className="input-field" value={dados?.capacidade || ''} type="number" required onChange={(e) => setDados({ ...dados, capacidade: e.target.value })} />

                <label htmlFor="tipo">Tipo:</label>
                <input id="tipo" className="input-field" value={dados?.tipo || ''} type="text" required onChange={(e) => setDados({ ...dados, tipo: e.target.value })} />

                <label htmlFor="velocidade">Velocidade:</label>
                <input id="velocidade" className="input-field" value={dados?.velocidade || ''} type="number" required onChange={(e) => setDados({ ...dados, velocidade: e.target.value })} />

                <label htmlFor="marca">Marca:</label>
                <input id="marca" className="input-field" value={dados?.marca || ''} type="text" required onChange={(e) => setDados({ ...dados, marca: e.target.value })} />

                <button type='submit' className="submit-btn">Enviar</button>
            </form>

            {dados && (
                <div>
                    <p>Capacidade: {dados.capacidade}</p>
                    <p>Tipo: {dados.tipo}</p>
                    <p>Velocidade: {dados.velocidade}</p>
                    <p>Marca: {dados.marca}</p>
                </div>
            )}

            <p>{status.memoria}</p>

            <a href='/memoria' className='voltar'>Voltar</a>
        </div>
    );

    async function gravar(e) {
        e.preventDefault();
        try {
            const resposta = await axios.put(`http://localhost:4000/memoria/${id}`, dados);
            setStatus(resposta.data);
            console.log(resposta);
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Update;
