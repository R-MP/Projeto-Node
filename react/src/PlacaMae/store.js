import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Store() {
    const [status, setStatus] = useState('');
    const modelo = useRef("");
    const socket = useRef("");
    const formato = useRef("");
    const slotRam = useRef("");
    const slotExp = useRef("");
    const marca = useRef("");

    async function gravar(e) {
        e.preventDefault();
        try {
            const dados = {
                modelo: modelo.current.value,
                socket: socket.current.value,
                formato: formato.current.value,
                slotRam: slotRam.current.value,
                slotExp: slotExp.current.value,
                marca: marca.current.value
            };
            console.log('Dados a serem enviados:', dados);
            const resposta = await axios.post('http://localhost:4000/placa-mae', dados);
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
                Socket: <input ref={socket} type="text" required />
                Formato: <input ref={formato} type="text" required />
                Slot RAM: <input ref={slotRam} type="text" required />
                Slot Expansão: <input ref={slotExp} type="text" required />
                Marca: <input ref={marca} type="text" required />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status.placaMae}</h3>
            <h4>Dados retornados pela API:
                <br />
                Modelo: {status.dados?.modelo || "nulo"}
                <br />
                Socket: {status.dados?.socket || "nulo"}
                <br />
                Formato: {status.dados?.formato || "nulo"}
                <br />
                Slot RAM: {status.dados?.slotRam || "nulo"}
                <br />
                Slot Expansão: {status.dados?.slotExp || "nulo"}
                <br />
                Marca: {status.dados?.marca || "nulo"}
            </h4>
            <Link to='/placa-mae'>Voltar</Link>
        </div>
    );
}

export default Store;
