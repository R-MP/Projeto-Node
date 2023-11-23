import { Link } from "react-router-dom";
import './style.css';

function Menu() {
    return (
        <div className="menu">
            <div className="logo">
                <h1>TECH HUB</h1>
            </div>
            <ul className="options">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/processador" className="link">Processadores</Link></li>
                <li><Link to="/placa-mae" className="link">Placas Mãe</Link></li>
                <li><Link to="/memoria" className="link">Memórias</Link></li>
                <li><Link to="/fonte" className="link">Fontes</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
