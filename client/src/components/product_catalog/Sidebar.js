import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useSearchParams } from "react-router-dom";
import { useScrollbarWidth } from "../../myCustomHooks";
import Checkbox from "./sidebar_components/Checkbox";

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
        max-width: 200px;
        margin: 0 auto 0 auto;
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
    
    @media (max-width: ${(props) => 429 + props.scrollbarWidth}px) {
        position: static;

        .filter {
            margin-left: 20%;
            margin-right: 20%;
            min-width: 100px;
        }
    }
`;

export default function Sidebar(props) {
    // --Function Definitions--
    function handleChange(event) {
        const newSearchParams= new URLSearchParams(new FormData(event.target.form));
        if (searchParams.has('name')) {
            newSearchParams.set('name', searchParams.get('name'));
        }
        setSearchParams(newSearchParams);
        if (window.innerWidth > 429 + scrollbarWidth) props.scroll();
    }
    //

    // --Function Body---
    const [searchParams, setSearchParams]= useSearchParams();
    const scrollbarWidth= useScrollbarWidth();
    return (
        <StyledAside id="sidebar" scrollbarWidth={scrollbarWidth}>
            <span className="route">
                <span className="unfocused"><Link to="/#">Inicio</Link> / </span>
                Productos
            </span>
            <div className="filter">
                <h4>Categoria</h4>
                <form id="filter" onChange={handleChange}>
                    <ul>
                        <Checkbox id="cupcakes" name="filterCupcakes">
                            Cupcakes
                        </Checkbox>
                        <Checkbox id="cakes" name="filterCakes">
                            Pasteles
                        </Checkbox>
                        <Checkbox id="cookies" name="filterCookies">
                            Cookies
                        </Checkbox>
                        <Checkbox id="macarons" name="filterMacarons">
                            Macarrones
                        </Checkbox>
                        <Checkbox id="desserts" name="filterDesserts">
                            Postres
                        </Checkbox>
                        <Checkbox id="croissants" name="filterCroissants">
                            Facturas
                        </Checkbox>
                    </ul>
                </form>                
            </div>
        </StyledAside>
    );
}

