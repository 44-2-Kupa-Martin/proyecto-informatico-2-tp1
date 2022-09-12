import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledNavbar= styled.nav`
    /* nav */
    display: flex;
    height: ${props => props.height ?? '70px'};
    width: 100%;
    flex-flow: row nowrap;
    justify-content: ${props => props.noLogo ? 'flex-end' : 'space-between'};

    a.logo {
        display: inline-flex;
        height: 100%;
        width: fit-content;
        margin: 0 1% 0 1%;
        align-items: center;
        flex-flow: row nowrap;
        text-decoration: none;
    }

    a.logo:active {
        color: black;
    }

    a.logo:visited {
        color: black;
    }

    .logo h1 {
        padding-left: 10px;
        font-family: 'hello-honey';
        font-size: xx-large;
        white-space: nowrap;
    }


    ul {
        height: 100%;
        width: fit-content;
        padding: 0;
        margin: 0 1% 0 1%;
        list-style-type: none;
        white-space: nowrap;
    }

    ul li {
        height: 100%;
        width: fit-content;
        padding: 0 15px 0 15px;
        display: inline-block;
    }

    li>a {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: gray;
        text-decoration: none;
        font-size: medium;
        text-transform: uppercase;
        font-weight: 900;
        font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
    }
    
    li>a:visited {
        color: gray;
    }

    li:hover>a {
        color: black;
    }
`;

export default function Navbar(props) {
    return (
        <StyledNavbar height={props.height} noLogo={props.noLogo}>
            {props.noLogo ? 
            <></>
            :
            <Link to="/" className="logo">
                <img src="./favicon.ico" alt="Logo" />
                <h1>Mi Solcito</h1>
            </Link>}
            <ul>
                <li><Link to="/products#">Productos</Link></li>
                <li><Link to="/#about">Nosotros</Link></li>
                <li><Link to="/#services">Servicios</Link></li>
                <li><Link to="/#contact">Contacto</Link></li>
            </ul>
        </StyledNavbar>
    )
}