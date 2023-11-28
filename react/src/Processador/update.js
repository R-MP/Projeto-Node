import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const [status, setStatus] = useState({});
    const { id } = useParams();
    const [dados, setDados] = useState({ id: 0, modelo: "", socket: "", arquitetura: "", nucleos: "", threads: "", frequencia: "", marca: "" });

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
        <div div style={{ padding: '40px' }}>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id="feedback-form">
                <h2 class="header">Alterar Registro</h2>
                <div>
                    <form onSubmit={gravar}>
                        <input id="modelo" class="input-field" value={dados?.modelo || ''} type="text" required onChange={(e) => setDados({ ...dados, modelo: e.target.value })} />
                        <input id="socket" class="input-field" value={dados?.socket || ''} type="text" required onChange={(e) => setDados({ ...dados, socket: e.target.value })} />
                        <input id="arquitetura" class="input-field" value={dados?.arquitetura || ''} type="text" required onChange={(e) => setDados({ ...dados, arquitetura: e.target.value })} />
                        <input id="nucleos" class="input-field" value={dados?.nucleos || ''} type="text" required onChange={(e) => setDados({ ...dados, nucleos: e.target.value })} />
                        <input id="threads" class="input-field" value={dados?.threads || ''} type="text" required onChange={(e) => setDados({ ...dados, threads: e.target.value })} />
                        <input id="threads" class="input-field" value={dados?.frequencia || ''} type="text" required onChange={(e) => setDados({ ...dados, frequencia: e.target.value })} />
                        <input id="marca" class="input-field" value={dados?.marca || ''} type="text" required onChange={(e) => setDados({ ...dados, marca: e.target.value })} />
                        <button type='submit' class="submit-btn">Enviar</button>
                    </form>
                </div>
            </div>

    <p>{status.processador}</p>

    <footer><Link to="/processador" class="btn-voltar">Voltar</Link></footer>
</div>

    )

    async function gravar(e) {
        e.preventDefault();
        try {
            const resposta = await axios.put(`http://localhost:4000/processador/${id}`, dados);
            setStatus(resposta.data);
            console.log(resposta);

            // Redirecionamento após o envio bem-sucedido
            window.location.href = '/processador';
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Update;