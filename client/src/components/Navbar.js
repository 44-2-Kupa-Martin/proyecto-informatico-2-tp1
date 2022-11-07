import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useCallback, useState } from "react";
import { useEffect } from "react";

const StyledNavbar= styled.nav`
    /* nav */
    display: flex;
    height: ${props => props.height};
    width: 100%;
    flex-flow: row nowrap;
    justify-content: ${props => props.noLogo ? 'flex-end' : 'space-between'};
    position: fixed;
    background-color: white;
    transition: top 0.2s ease;
    top: ${props => props.hideNav ? `-${props.height}` : '0px'};
    left: 0;
    z-index: 1;
    
    //button animation
    .menu {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        padding: 0;
    }
    .menu svg {
        height: 80%;
    }
    .line {
      fill: none;
      stroke: black;
      stroke-width: 6;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
    .line2 {
      stroke-dasharray: 60 60;
      stroke-width: 6;
    }
    .line3 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
    .opened .line1 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }
    .opened .line2 {
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 6;
    }
    .opened .line3 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }


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

    h1 {
        color: black;
    }

    @media (max-width: 630px) {
        a.logo {
            margin: auto;
        }
        button.menu {
            display: flex;
            align-items: center;
            width: 80px;
            height: 100%;
            position: ${props => props.showMenu ? 'fixed' : 'absolute'};
            top: 0;
            right: 0;
            height: ${props => props.height};
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
=========
    h1 {
        color: black;
>>>>>>>>> Temporary merge branch 2
    }
`;

export default function Navbar(props) {
    function linkHandleClick(event) {
        window.removeEventListener('scroll', scrollCb);
        setShowMenu(false); 
        setHideNav(true);
        setTimeout(() => {
            window.addEventListener('scroll', scrollCb);
        }, 800);
    }

    const [showMenu, setShowMenu]= useState(false);
    const [lastScrollY, setLastScrollY]= useState(0);
    const [hideNav, setHideNav]= useState(false);
    const scrollCb= useCallback(() => {
        setHideNav(window.scrollY > lastScrollY);
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', scrollCb);
        return () => window.removeEventListener('scroll', scrollCb);
    }, [scrollCb]);

    return (
        <>
        <div style={{height: props.height ?? '70px'}}></div>
        <StyledNavbar height={props.height ?? '70px'} noLogo={props.noLogo} showMenu={showMenu} hideNav={hideNav}>
            {props.noLogo ? 
            <></>
            :
            <Link to="/" className="logo">
                <img src="./favicon.ico" alt="Logo" />
                <h1>Mi Solcito</h1>
            </Link>}
            <button className={`menu ${showMenu ? 'opened' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                <svg viewBox="0 0 100 100">
                  <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path class="line line2" d="M 20,50 H 80" />
                  <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <ul>
                <li><Link onClick={linkHandleClick} to="/products#">Productos</Link></li>
                <li><Link onClick={linkHandleClick} to="/#about">Nosotros</Link></li>
                <li><Link onClick={linkHandleClick} to="/#services">Servicios</Link></li>
                <li><Link onClick={linkHandleClick} to="/#contact">Contacto</Link></li>
            </ul>
        </StyledNavbar>
        </>
    )
}