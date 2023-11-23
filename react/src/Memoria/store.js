import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Store() {
    const [status, setStatus] = useState('');
    const modelo = useRef("");
    const ddr = useRef("");
    const frequencia = useRef(0);
    const quantidadeRam = useRef("");
    const marca = useRef("");

    return (
        <div>
            <form onSubmit={gravar} className='formulario'>
                Modelo: <input ref={modelo} type="text" required />
                DDR: <input ref={ddr} type="text" required />
                Frequência: <input ref={frequencia} type="number" required />
                Quantidade de RAM: <input ref={quantidadeRam} type="text" required />
                Marca: <input ref={marca} type="text" required />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status.memoria}</h3>
            <h4>Dados retornados pela API:
                <br />
                Modelo: {status.dados == null ? "nulo" : status.dados.modelo}
                <br />
                DDR: {status.dados == null ? "nulo" : status.dados.ddr}
                <br />
                Frequência: {status.dados == null ? "nulo" : status.dados.frequencia}
                <br />
                Quantidade de RAM: {status.dados == null ? "nulo" : status.dados.quantidadeRam}
                <br />
                Marca: {status.dados == null ? "nulo" : status.dados.marca}
            </h4>
            <Link to='/memoria'>Voltar</Link>
        </div>
    )

    async function gravar(e) {
        e.preventDefault();
        try {
            const json = {
                modelo: modelo.current.value,
                ddr: ddr.current.value,
                frequencia: frequencia.current.value,
                quantidadeRam: quantidadeRam.current.value,
                marca: marca.current.value
            };
            const resposta = await axios.post('http://localhost:4000/memoria', json);
            setStatus(resposta.data);
            console.log(resposta);
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Store;
