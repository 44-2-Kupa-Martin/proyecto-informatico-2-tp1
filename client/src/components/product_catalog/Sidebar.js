import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useRef } from "react";

const StyledAside= styled.aside`
    position: sticky;
    top: 0px;
    max-width: 300px;
    align-self: start;
    flex-basis: 200px;
    flex-grow: 1;
    padding: 5px;

    .route {
        display: block;
        margin: 20px 0 20px 0;
        text-align: center;
        font-weight: bolder;
        font-size: small;
        text-transform: uppercase;
        font-family: var(--main-font);
    }
    
    .unfocused {
        color: var(--link-color);
    }
    .unfocused>a {
        color: var(--link-color);
        text-decoration: none;
    }
    .filter {
        font-size: small;
        font-family: var(--main-font);
        border: 1px solid black;
        padding: 8px;
    }
    h4 {
        font-family: var(--main-font);
        font-weight: bolder;
        margin: 10px 0 10px 0;
        text-transform: uppercase;
    }

    ul {
        list-style: none;
        padding: 0;
        
    }
    li {
        display: flex;
        align-items: flex-end;
        margin: 5px 0 5px 0;
        
    }
    
    ${/* http://csscheckbox.com/css-checkbox-generator.php */''}

    .css-checkbox { 
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; 
        width: 1px; 
        margin: -1px; 
        padding: 0; 
        border: 0; 
    }
    .css-checkbox + label { 
        user-select: none;
        position: relative; 
        font-size: 12px; 
        cursor: pointer; 
        display: inline-flex; 
        align-items: center; 
        height: 16px; 
        color: rgb(0, 0, 0); 
    }
    .css-checkbox + label::before { 
        content: " "; 
        display: inline-block; 
        vertical-align: middle; 
        margin-right: 3px; 
        width: 12px; 
        height: 12px; 
        background-color: white; 
        border-width: 1px; 
        border-style: solid; 
        border-color: rgb(204, 204, 204); 
        border-radius: 2px; 
        box-shadow: none; 
    }
    .css-checkbox:checked + label::before { 
        border-color: rgb(0,0,0); 
    }
    .css-checkbox:checked + label::after { 
        content: " "; 
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+"); 
        background-repeat: no-repeat; 
        background-size: 8px 8px; 
        background-position: center center; 
        position: absolute; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        margin-left: 0px; 
        left: 0px; 
        top: 0px; 
        text-align: center; 
        background-color: transparent; 
        font-size: 10px; 
        height: 14px; 
        width: 14px; 
    }

    @media (max-width: ${(props) => 419 + props.scrollbarWidth}px) {
        position: static;

        .filter {
            margin-left: 20%;
            margin-right: 20%;
            min-width: 100px;
        }
    }
`;

export default function Sidebar(props) {
    return (
        <StyledAside scrollbarWidth={useScrollbarWidth()}>
            <span className="route"><span className="unfocused"><Link to="/#">Inicio</Link> / </span>Productos</span>
            <div className="filter">
                <h4>Categoria</h4>
                <ul>
                    <li>
                        <input className="css-checkbox" type="checkbox" id="cupcakes" />
                        <label htmlFor="cupcakes">Cupcakes</label>
                    </li>
                    <li>
                        <input className="css-checkbox" type="checkbox" id="cakes" />
                        <label htmlFor="cakes">Pasteles</label>
                    </li>
                    <li>
                        <input className="css-checkbox" type="checkbox" id="cookies" />
                        <label htmlFor="cookies">Cookies</label>
                    </li>
                    <li>
                        <input className="css-checkbox" type="checkbox" id="macarons" />
                        <label htmlFor="macarons">Macarrones</label>
                    </li>
                    <li>
                        <input className="css-checkbox" type="checkbox" id="desserts" />
                        <label htmlFor="desserts">Postres</label>
                    </li>
                    <li>
                        <input className="css-checkbox" type="checkbox" id="croissants" />
                        <label htmlFor="croissants">Facturas</label>
                    </li>
                </ul>
            </div>
        </StyledAside>
    );
}

function useScrollbarWidth() {
    const didCompute = useRef(false);
    const widthRef = useRef(0);
  
    if (didCompute.current) return widthRef.current;
  
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  
    didCompute.current = true;
    widthRef.current = scrollbarWidth;
  
    return scrollbarWidth;
};