import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Store() {
    const [status, setStatus] = useState('');
    const modelo = useRef("");
    const socket = useRef("");
    const arquitetura = useRef("");
    const nucleos = useRef("");
    const threads = useRef("");
    const frequencia = useRef("");
    const marca = useRef("");

    return (
        <div>
            <form onSubmit={gravar} className='formulario'>
                Modelo: <input ref={modelo} type="text" required />
                Socket: <input ref={socket} type="text" required />
                Arquitetura: <input ref={arquitetura} type="text" required />
                Núcleos: <input ref={nucleos} type="number" required />
                Threads: <input ref={threads} type="number" required />
                Frequência: <input ref={frequencia} type="number" required />
                Marca: <input ref={marca} type="text" required />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status.processador}</h3>
            <h4>Dados retornados pela API:
                <br />
                Modelo: {status.dados == null ? "nulo" : status.dados.modelo}
                <br />
                Socket: {status.dados == null ? "nulo" : status.dados.socket}
                <br />
                Arquitetura: {status.dados == null ? "nulo" : status.dados.arquitetura}
                <br />
                Núcleos: {status.dados == null ? "nulo" : status.dados.nucleos}
                <br />
                Threads: {status.dados == null ? "nulo" : status.dados.threads}
                <br />
                Frequência: {status.dados == null ? "nulo" : status.dados.frequencia}
                <br />
                Marca: {status.dados == null ? "nulo" : status.dados.marca}
            </h4>
            <Link to='/processador'>Voltar</Link>
        </div>
    )

    async function gravar(e) {
        e.preventDefault();
        try {
            const json = {
                modelo: modelo.current.value,
                socket: socket.current.value,
                arquitetura: arquitetura.current.value,
                nucleos: Number(nucleos.current.value),
                threads: Number(threads.current.value),
                frequencia: Number(frequencia.current.value),
                marca: marca.current.value
            };
            const resposta = await axios.post('http://localhost:4000/processador', json);
            setStatus(resposta.data);
            console.log(resposta);
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Store;
