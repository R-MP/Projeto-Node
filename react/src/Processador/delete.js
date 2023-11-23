import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function DeleteProcessador() {
    const [status, setStatus] = useState('');

    async function deletarProcessador(id) {
        try {
            const resposta = await axios.delete(`http://localhost:4000/processador/${id}`);
            setStatus(resposta.data);
            console.log(resposta); // Confira no console o que foi retornado pela API
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <div>
            <h2>Excluir Processador</h2>
            <button onClick={() => deletarProcessador()}>Excluir Processador</button>
            {/* Adicione botões ou lógica para selecionar o processador a ser excluído */}
            <h3>{status}</h3>
            <Link to='/processador'>Voltar</Link>
        </div>
    );
}

export default DeleteProcessador;
