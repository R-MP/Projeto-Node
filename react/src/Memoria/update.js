import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const [status, setStatus] = useState({});
    const { id } = useParams();
    const [dados, setDados] = useState({ id: 0, modelo: "", ddr: "", frequencia: "", quantidadeRam: "", marca: "" });

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
                        <input id="ddr" class="input-field" value={dados?.ddr || ''} type="text" required onChange={(e) => setDados({ ...dados, ddr: e.target.value })} />
                        <input id="frequencia" class="input-field" value={dados?.frequencia || ''} type="text" required onChange={(e) => setDados({ ...dados, frequencia: e.target.value })} />
                        <input id="quantidadeRam" class="input-field" value={dados?.quantidadeRam || ''} type="text" required onChange={(e) => setDados({ ...dados, quantidadeRam: e.target.value })} />
                        <input id="marca" class="input-field" value={dados?.marca || ''} type="text" required onChange={(e) => setDados({ ...dados, marca: e.target.value })} />
                        <button type='submit' class="submit-btn">Enviar</button>
                    </form>
                </div>
            </div>

    <p>{status.memoria}</p>

    <footer><Link to="/memoria" class="btn-voltar">Voltar</Link></footer>
</div>

    )

    async function gravar(e) {
        e.preventDefault();
        try {
            const resposta = await axios.put(`http://localhost:4000/memoria/${id}`, dados);
            setStatus(resposta.data);
            console.log(resposta);

            // Redirecionamento após o envio bem-sucedido
            window.location.href = '/memoria';
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Update;