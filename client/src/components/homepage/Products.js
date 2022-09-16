import styled from "styled-components";
import { HashLink as Link } from "react-router-dom";

// Clemente
const StyledProducts = styled.section`
    h1 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: #404040;
    }

    p {
        text-align: justify;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        color: #595959;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8rem;
    }

    .box {
        justify-content: center;
        border-radius: 2rem;
        width: 10rem;
        height: 10rem;
        text-align: center;
    }
    .box h3 {
        color: white;
        font-size: 2rem;
        margin-top: -56.5%;
        font-family: Bahnschrift;
        user-select: none;
        
    }
    .box img {
        width: 9rem;
        height: 9rem;
    }
    a {
        text-decoration:none;
    }

    .b1, .b5 {
        background-color: rgb(220, 176, 169);
    }
    .b2, .b6  {
        background-color: rgb(233, 214, 175);
    }
    .b3, .b4 {
        background-color: rgb(209, 227, 255);
    }

    
    .b1:hover, .b5:hover {
        background-color: rgb(197, 123, 112);
        text-align: center;
        transition: all 0.5s ease-out;
    }
    .b2:hover, .b6:hover {
        background-color: rgb(218, 187, 122);
        text-align: center;
        transition: all 0.5s ease-out;
    }

    .b3:hover, .b4:hover {
        background-color: rgb(180, 210, 255);
        text-align: center;
        transition: all 0.5s ease-out;
    }
    .b1:hover img, .b5:hover img, .b2:hover img, .b6:hover img, .b3:hover img, .b4:hover img {
        display:none;
    }
    .b1:hover h3, .b5:hover h3, .b2:hover h3, .b6:hover h3, .b3:hover h3,.b4:hover h3 {
        margin-top: 36.5%;
    }

    

    
`;

export default function Products(props) {
    return (
        <StyledProducts id={props.id}>
            <h1>Productos</h1>
            <p id="products#">Contamos con una amplia variedad de tortas para todos los gustos, además de tortas, ofrecemos una gran variedad de dulces.</p>
            <p>Elaboramos galletas, cupcakes, macarros, postres y muchas más delicias. ¡No te quedes con el antojo!</p>
            <section class="flex-container">
                <a href="/products#" class="box b1">
                <img id="cupcakes" src="./cupcakes.png" alt="Una foto de nuestros Cupcakes"/>
                    <h3>Cupcakes</h3>
                </a>
                <a href="/products#" class="box b2">
                    <img id="galletitas" src="./galletitas.png" alt="Una foto de nuestras Cookies"/>
                    <a href="/products#"><h3>Galletitas</h3></a>
                </a>
                <a href="/products#" class="box b3">
                    <img id="macarrons" src="./macarrons.png" alt="Una foto de nuestros Macarrons"/>
                    <a href="/products#"><h3>Macarrons</h3></a>
                </a>
                <a href="/products#" class="box b4">
                    <img id="postres" src="./postres.png" alt="Una foto de nuestros Postres"/>
                    <a href="/products#"><h3>Postres</h3></a>
                </a>
                <a href="/products#" class="box b5">
                    <img id="facturas" src="./facturas.png" alt="Una foto de nuestras Facturas"/>
                    <a href="/products#"><h3>Facturas</h3></a>
                </a>
                <a href="/products#" class="box b6">
                    <img id="pastel" src="./pastel.png" alt="Una foto de nuestros Cupcakes"/>
                    <a href="/products#"><h3>Pasteles</h3></a>
                </a>
            </section>
                
                
                
                
                
                
        </StyledProducts>
    )
}