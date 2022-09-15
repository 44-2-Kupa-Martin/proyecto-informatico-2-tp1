npmimport styled from "styled-components";

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
`;

export default function Products(params) {
    return (
        <StyledProducts>
            <h1>Productos</h1>
            <p id="products">Contamos con una amplia variedad de tortas para todos los gustos, además de tortas, ofrecemos una gran variedad de dulces.</p>
            <p>Elaboramos galletas, cupcakes, macarros, postres y muchas más delicias. ¡No te quedes con el antojo!</p>
                <img src="./cupcakes.png" alt="Una foto de nuestros Cupcakes"/>
                <img src="./galletitas.png" alt="Una foto de nuestras Cookies"/>
                <img src="./macarrons.png" alt="Una foto de nuestros Macarrons"/>

                <img src="./postres.png" alt="Una foto de nuestros Postres"/>
                <img src="./facturas.png" alt="Una foto de nuestras Facturas"/>
                <img src="./cupcakes.png" alt="Una foto de nuestros Cupcakes"/>
        </StyledProducts>
    )
}