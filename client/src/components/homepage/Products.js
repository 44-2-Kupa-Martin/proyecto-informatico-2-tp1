import styled from "styled-components";

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
        font-size: clamp(10px, 2.02vw, 20px);
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
        margin-top: -60%;
        font-family: Bahnschrift;
    }
    .box img {
        width: 100%;
        height: 150px;
    }

    
    .b1 {
        background-color: rgb(220, 176, 169);
    }
    .b2 {
        background-color: rgb(233, 214, 175);
    }
    .b3 {
        background-color: rgb(221, 233, 251);
    }
    .b4 {
        background-color: rgb(221, 233, 251);
    }
    .b5 {
        background-color: rgb(220, 176, 169);
    }
    .b6 {
        background-color: rgb(233, 214, 175);
    }
    
    .b1:hover {
        background-color: rgb(197, 123, 112);
        text-align: center;
    }
    .b1:hover img {
        display:none;
    }
    .b1:hover h3 {
        margin-top: 36.5%;
    }



    .b5:hover {
        background-color: rgb(197, 123, 112);
        text-align: center;
    }
    .b5:hover img {
        display:none;
    }
    .b5:hover h3 {
        margin-top: 36.5%;
    }



    .b2:hover {
        background-color: rgb(218, 187, 122);
        text-align: center;
    }
    .b2:hover img {
        display:none;
    }
    .b2:hover h3 {
        margin-top: 36.5%;
    }



    .b6:hover {
        background-color: rgb(218, 187, 122);
        text-align: center;
    }
    .b6:hover img {
        display:none;
    }
    .b6:hover h3 {
        margin-top: 36.5%;
    }



    .b3:hover {
        background-color: rgb(198, 219, 249);
        text-align: center;
    }
    .b3:hover img {
        display:none;
    }
    .b3:hover h3 {
        margin-top: 36.5%;
    }



    .b4:hover {
        background-color: rgb(198, 219, 249);
        text-align: center;
    }
    .b4:hover img {
        display:none;
    }
    .b4:hover h3 {
        margin-top: 36.5%;
    }
    
`;

export default function Products(props) {
    return (
        <StyledProducts id={props.id}>
            <h1>Productos</h1>
            <p id="products">Contamos con una amplia variedad de tortas para todos los gustos, además de tortas, ofrecemos una gran variedad de dulces.</p>
            <p>Elaboramos galletas, cupcakes, macarros, postres y muchas más delicias. ¡No te quedes con el antojo!</p>
            <section class="flex-container">
                <div class="box b1">
                    <img id="cupcakes" src="./cupcakes.png" alt="Una foto de nuestros Cupcakes"/>
                    <h3>Cupcakes</h3>
                </div>
                <div class="box b2">
                    <img id="galletitas" src="./galletitas.png" alt="Una foto de nuestras Cookies"/>
                    <h3>Galletitas</h3>
                </div>
                <div class="box b3">
                    <img id="macarrons" src="./macarrons.png" alt="Una foto de nuestros Macarrons"/>
                    <h3>Macarrons</h3>
                </div>
                <div class="box b4">
                    <img id="postres" src="./postres.png" alt="Una foto de nuestros Postres"/>
                    <h3>Postres</h3>
                </div>
                <div class="box b5">
                    <img id="facturas" src="./facturas.png" alt="Una foto de nuestras Facturas"/>
                    <h3>Facturas</h3>
                </div>
                <div class="box b6">
                    <img id="pastel" src="./pastel.png" alt="Una foto de nuestros Cupcakes"/>
                    <h3>Pasteles</h3>
                </div>
            </section>
                
                
                
                
                
                
        </StyledProducts>
    )
}