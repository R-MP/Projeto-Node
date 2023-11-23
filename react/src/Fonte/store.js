import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Store() {
    const [status, setStatus] = useState('');
    const modelo = useRef("");
    const potencia = useRef(0); // Definido como número padrão
    const formato = useRef("");
    const marca = useRef("");

    async function gravar(e) {
        e.preventDefault();
        try {
            const dados = {
                modelo: modelo.current.value,
                potencia: parseInt(potencia.current.value), // Convertido para número
                formato: formato.current.value,
                marca: marca.current.value
            };
            console.log('Dados a serem enviados:', dados);
            const resposta = await axios.post('http://localhost:4000/fonte', dados);
            console.log('Resposta da API:', resposta.data);
            setStatus(resposta.data);
        } catch (erro) {
            console.error('Erro ao enviar dados:', erro);
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <div>
            <form onSubmit={gravar} className='formulario'>
                Modelo: <input ref={modelo} type="text" required />
                Potência: <input ref={potencia} type="number" required />
                Formato: <input ref={formato} type="text" required />
                Marca: <input ref={marca} type="text" required />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status.fonte}</h3>
            <h4>Dados retornados pela API:
                <br />
                Modelo: {status.dados?.modelo || "nulo"}
                <br />
                Potência: {status.dados?.potencia || "nulo"}
                <br />
                Formato: {status.dados?.formato || "nulo"}
                <br />
                Marca: {status.dados?.marca || "nulo"}
            </h4>
            <Link to='/fonte'>Voltar</Link>
        </div>
    );
}

export default Store;
