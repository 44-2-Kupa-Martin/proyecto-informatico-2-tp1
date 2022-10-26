import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const StyledNavbar= styled.nav`
    /* nav */
    display: flex;
    height: ${props => props.height ?? '70px'};
    width: 100%;
    flex-flow: row nowrap;
    justify-content: ${props => props.noLogo ? 'flex-end' : 'space-between'};
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    z-index: 1;

    button {
        display: none;
    }

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

    @media (max-width: 630px) {
        a.logo {
            margin: auto;
        }
        button {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            z-index: 1;
        }
        ul {
            display: flex;
            flex-flow: column;
            align-items: center;
            transition: background-color 0.2s linear, opacity 0.2s linear;
            visibility: ${props => props.showMenu ? "visible" : "hidden"};
            background-color: rgba(0, 255, 255, ${props => props.showMenu ? "0.8" : "0"});
            opacity: ${props => props.showMenu ? "1" : "0"};
            margin: 0;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
        }
        ul li {
            display: block;
            width: 100%;
        }
    }
`;

export default function Navbar(props) {
    const [showMenu, setShowMenu]= useState(false);
    return (
        <StyledNavbar height={props.height} noLogo={props.noLogo} showMenu={showMenu}>
            {props.noLogo ? 
            <></>
            :
            <Link to="/" className="logo">
                <img src="./favicon.ico" alt="Logo" />
                <h1>Mi Solcito</h1>
            </Link>}
            <button onClick={() => setShowMenu(!showMenu)}>hello</button>
            <ul>
                <li onClick={() => setShowMenu(false)}><Link to="/products#">Productos</Link></li>
                <li onClick={() => setShowMenu(false)}><Link to="/#about">Nosotros</Link></li>
                <li onClick={() => setShowMenu(false)}><Link to="/#services">Servicios</Link></li>
                <li onClick={() => setShowMenu(false)}><Link to="/#contact">Contacto</Link></li>
            </ul>
        </StyledNavbar>
    )
}