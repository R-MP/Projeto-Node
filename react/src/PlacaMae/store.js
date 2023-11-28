import axios from 'axios';
import { useRef, useState } from 'react';
import { Link} from 'react-router-dom';

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
            const resposta = await axios.post('http://localhost:4000/placaMae', dados);
            console.log('Resposta da API:', resposta.data);
            setStatus(resposta.data);

            // Redirecionamento após o envio bem-sucedido
            window.location.href = '/placaMae';
        } catch (erro) {
            console.error('Erro ao enviar dados:', erro);
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        
        <div style={{ padding: '40px' }}>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id="feedback-form">
                <h2 class="header">Registro de Placa Mãe</h2>
                <div>
                    <form onSubmit={gravar} class="tabela">
                    <input type="text" placeholder="Modelo" ref={modelo} required></input>
                    <input type="text" placeholder="Socket" ref={socket} required></input>
                    <input type="text" placeholder="Formato" ref={formato} required></input>
                    <input type="text" placeholder="Slot RAM" ref={slotRam} required></input>
                    <input type="text" placeholder="Slot Expansão" ref={slotExp} required></input>
                    <input type="text" placeholder="Marca" ref={marca} required></input>
                    <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>

            <h3>{status.placaMae}</h3>
            <footer><Link to="/placaMae" class="btn-voltar">Voltar</Link></footer>
        </div>
    );
}

export default Store;
