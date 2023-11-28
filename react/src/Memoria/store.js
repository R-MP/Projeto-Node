import axios from 'axios';
import { useRef, useState } from 'react';
import { Link} from 'react-router-dom';

function Store() {
    const [status, setStatus] = useState('');
    const modelo = useRef("");
    const ddr = useRef(""); 
    const frequencia = useRef("");
    const quantidadeRam = useRef("");
    const marca = useRef("");

    async function gravar(e) {
        e.preventDefault();
        try {
            const dados = {
                modelo: modelo.current.value,
                ddr: ddr.current.value,
                frequencia: frequencia.current.value,
                quantidadeRam: quantidadeRam.current.value,
                marca: marca.current.value
            };
            console.log('Dados a serem enviados:', dados);
            const resposta = await axios.post('http://localhost:4000/memoria', dados);
            console.log('Resposta da API:', resposta.data);
            setStatus(resposta.data);

            // Redirecionamento após o envio bem-sucedido
            window.location.href = '/memoria';
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
                <h2 class="header">Registro de Memoria</h2>
                <div>
                    <form onSubmit={gravar} class="tabela">
                    <input type="text" placeholder="Modelo" ref={modelo} required></input>
                    <input type="text" placeholder="DDR" ref={ddr} required></input>
                    <input type="text" placeholder="Frequencia" ref={frequencia} required></input>
                    <input type="text" placeholder="RAM" ref={quantidadeRam} required></input>
                    <input type="text" placeholder="Marca" ref={marca} required></input>
                    <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>

            <h3>{status.memoria}</h3>
            <footer><Link to="/memoria" class="btn-voltar">Voltar</Link></footer>
        </div>
    );
}

export default Store;
