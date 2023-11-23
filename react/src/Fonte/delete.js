import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Delete() {
    const [status, setStatus] = useState('');

    async function deletarFonte(id) {
        try {
            const resposta = await axios.delete(`http://localhost:4000/fonte/${id}`);
            setStatus(resposta.data);
            console.log(resposta); // Confira no console o que foi retornado pela API
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <div>
            <h2>Excluir Fonte</h2>
            <button onClick={() => deletarFonte()}>Excluir Fonte</button>
            {/* Adicione botões ou lógica para selecionar a fonte a ser excluída */}
            <h3>{status}</h3>
            <Link to='/fonte'>Voltar</Link>
        </div>
    );
}

export default Delete;
