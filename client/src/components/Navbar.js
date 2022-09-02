import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledNavbar= styled.nav`
    /* nav */
    display: flex;
    height: ${props => props.height ?? '50px'};
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;

    h1 {
        margin: 0;
    }

    ul {
        
        height: 100%;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    ul li {
        height: 100%;
        display: inline-block;
    }

    li>a {
        text-decoration: none;
    }

    li>a:visited {
        color: blue;
    }

    li:hover>a {
        color: red;
    }
`;

export default function Navbar(props) {
    return (
        <StyledNavbar height={props.height}>
            <Link to="/">
                <img src="../../public/favicon.ico" alt="Logo" />
                <h1>Logo</h1>
            </Link>
            <ul>
                <li><Link to="/amogus">Inicio</Link></li>
                <li><Link to="/#products">Productos</Link></li>
                <li><Link to="/#about">Nosotros</Link></li>
                <li><Link to="/#services">Servicios</Link></li>
                <li><Link to="/#contact">Contacto</Link></li>
            </ul>
        </StyledNavbar>
    )
}