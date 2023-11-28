import axios from 'axios';
import { useRef, useState } from 'react';
import { Link} from 'react-router-dom';

function Store() {
    const [status, setStatus] = useState('');
    const modelo = useRef("");
    const socket = useRef(""); 
    const arquitetura = useRef("");
    const nucleos = useRef("");
    const threads = useRef("");
    const frequencia = useRef("");
    const marca = useRef("");

    async function gravar(e) {
        e.preventDefault();
        try {
            const dados = {
                modelo: modelo.current.value,
                socket: socket.current.value,
                arquitetura: arquitetura.current.value,
                nucleos: nucleos.current.value,
                threads: threads.current.value,
                frequencia: frequencia.current.value,
                marca: marca.current.value
            };
            console.log('Dados a serem enviados:', dados);
            const resposta = await axios.post('http://localhost:4000/processador', dados);
            console.log('Resposta da API:', resposta.data);
            setStatus(resposta.data);

            // Redirecionamento após o envio bem-sucedido
            window.location.href = '/processador';
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
                <h2 class="header">Registro de Processador</h2>
                <div>
                    <form onSubmit={gravar} class="tabela">
                    <input type="text" placeholder="Modelo" ref={modelo} required></input>
                    <input type="text" placeholder="Socket" ref={socket} required></input>
                    <input type="text" placeholder="Arquitetura" ref={arquitetura} required></input>
                    <input type="text" placeholder="Núcleos" ref={nucleos} required></input>
                    <input type="text" placeholder="Threads" ref={threads} required></input>
                    <input type="text" placeholder="Frequencia" ref={frequencia} required></input>
                    <input type="text" placeholder="Marca" ref={marca} required></input>
                    <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>

            <h3>{status.processador}</h3>
            <footer><Link to="/processador" class="btn-voltar">Voltar</Link></footer>
        </div>
    );
}

export default Store;
