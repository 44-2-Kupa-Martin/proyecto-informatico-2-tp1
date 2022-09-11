import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledAside= styled.aside`
    @media (max-width: 415px) {
        position: static;
    }

    position: sticky;
    top: 0px;
    max-width: 300px;
    align-self: start;
    flex-basis: 200px;
    flex-grow: 1;
    padding: 5px;

    #route {
        display: block;
        margin: 20px 0 20px 0;
        text-align: center;
        font-weight: 600;
    }
    h4 {
        margin: 10px 0 10px 0;
    }

    ul {
        list-style: none;
        padding: 0;
        
    }
    li {
        margin: 5px 0 5px 0;
    }
    .filter {
        border: 1px solid black;
        padding: 8px;
    }
`;

export default function Sidebar(props) {
    return (
        <StyledAside>
            <span id="route"><Link to="/">Inicio</Link>/Productos</span>
            <div className="filter">
                <h4>Categoria</h4>
                <ul>
                    <li>
                        <input type="checkbox" id="cupcakes" />
                        <label htmlFor="cupcakes">Cupcakes</label>
                    </li>
                    <li>
                        <input type="checkbox" id="cakes" />
                        <label htmlFor="cakes">Pasteles</label>
                    </li>
                    <li>
                        <input type="checkbox" id="cookies" />
                        <label htmlFor="cookies">Cookies</label>
                    </li>
                    <li>
                        <input type="checkbox" id="macarons" />
                        <label htmlFor="macarons">Macarrones</label>
                    </li>
                    <li>
                        <input type="checkbox" id="desserts" />
                        <label htmlFor="desserts">Postres</label>
                    </li>
                    <li>
                        <input type="checkbox" id="croissants" />
                        <label htmlFor="croissants">Facturas</label>
                    </li>
                </ul>
            </div>
        </StyledAside>
    );
}