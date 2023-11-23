import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Update() {
    const [status, setStatus] = useState({});
    const { id } = useParams();
    const [dados, setDados] = useState({ id: 0, modelo: "", socket: "", formato: "", slotram: "", slotexp: "", marca: "" });

    useEffect(() => {
        async function consultar() {
            try {
                const resposta = await axios.get(`http://localhost:4000/placa-mae/${id}`);
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

                <label htmlFor="socket">Socket:</label>
                <input id="socket" className="input-field" value={dados?.socket || ''} type="text" required onChange={(e) => setDados({ ...dados, socket: e.target.value })} />

                <label htmlFor="formato">Formato:</label>
                <input id="formato" className="input-field" value={dados?.formato || ''} type="text" required onChange={(e) => setDados({ ...dados, formato: e.target.value })} />

                <label htmlFor="slotram">Slot RAM:</label>
                <input id="slotram" className="input-field" value={dados?.slotram || ''} type="text" required onChange={(e) => setDados({ ...dados, slotram: e.target.value })} />

                <label htmlFor="slotexp">Slot Expansão:</label>
                <input id="slotexp" className="input-field" value={dados?.slotexp || ''} type="text" required onChange={(e) => setDados({ ...dados, slotexp: e.target.value })} />

                <label htmlFor="marca">Marca:</label>
                <input id="marca" className="input-field" value={dados?.marca || ''} type="text" required onChange={(e) => setDados({ ...dados, marca: e.target.value })} />

                <button type='submit' className="submit-btn">Enviar</button>
            </form>

            {dados && (
                <div>
                    <p>Modelo: {dados.modelo}</p>
                    <p>Socket: {dados.socket}</p>
                    <p>Formato: {dados.formato}</p>
                    <p>Slot RAM: {dados.slotram}</p>
                    <p>Slot Expansão: {dados.slotexp}</p>
                    <p>Marca: {dados.marca}</p>
                </div>
            )}

            <p>{status.placaMae}</p>

            <a href='/placa-mae' className='voltar'>Voltar</a>
        </div>
    );

    async function gravar(e) {
        e.preventDefault();
        try {
            const resposta = await axios.put(`http://localhost:4000/placa-mae/${id}`, dados);
            setStatus(resposta.data);
            console.log(resposta);
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}

export default Update;
