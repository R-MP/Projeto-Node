import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Update() {
    const [status, setStatus] = useState({});
    const { id } = useParams();
    const [dados, setDados] = useState({ id: 0, modelo: '', potencia: 0, formato: '', marca: '', socket: '', arquitetura: '', nucleos: 0, threads: 0, frequencia: 0 });

    useEffect(() => {
        async function consultar() {
            try {
                const resposta = await axios.get(`http://localhost:4000/processador/${id}`);
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
                <label htmlFor="modelo">Modelo:</label>
                <input id="modelo" className="input-field" value={dados?.modelo || ''} type="text" required onChange={(e) => setDados({ ...dados, modelo: e.target.value })} />

                <label htmlFor="marca">Marca:</label>
                <input id="marca" className="input-field" value={dados?.marca || ''} type="text" required onChange={(e) => setDados({ ...dados, marca: e.target.value })} />

                <label htmlFor="socket">Socket:</label>
                <input id="socket" className="input-field" value={dados?.socket || ''} type="text" required onChange={(e) => setDados({ ...dados, socket: e.target.value })} />

                <label htmlFor="arquitetura">Arquitetura:</label>
                <input id="arquitetura" className="input-field" value={dados?.arquitetura || ''} type="text" required onChange={(e) => setDados({ ...dados, arquitetura: e.target.value })} />

                <label htmlFor="nucleos">Núcleos:</label>
                <input id="nucleos" className="input-field" value={dados?.nucleos || ''} type="number" required onChange={(e) => setDados({ ...dados, nucleos: e.target.value })} />

                <label htmlFor="threads">Threads:</label>
                <input id="threads" className="input-field" value={dados?.threads || ''} type="number" required onChange={(e) => setDados({ ...dados, threads: e.target.value })} />

                <label htmlFor="frequencia">Frequência:</label>
                <input id="frequencia" className="input-field" value={dados?.frequencia || ''} type="number" required onChange={(e) => setDados({ ...dados, frequencia: e.target.value })} />

                <button type='submit' className="submit-btn">Enviar</button>
            </form>

            {dados && (
                <div>
                    <p>Modelo: {dados.modelo}</p>
                    <p>Marca: {dados.marca}</p>
                    <p>Socket: {dados.socket}</p>
                    <p>Arquitetura: {dados.arquitetura}</p>
                    <p>Núcleos: {dados.nucleos}</p>
                    <p>Threads: {dados.threads}</p>
                    <p>Frequência: {dados.frequencia}</p>
                </div>
            )}

            <p>{status.processador}</p>

            <a href='/processador' className='voltar'>Voltar</a>
        </div>
    );

    async function gravar(e) {
        e.preventDefault();
        try {
            const resposta = await axios.put(`http://localhost:4000/processador/${id}`, dados);
            setStatus(resposta.data);
            console.log(resposta);
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Update;
