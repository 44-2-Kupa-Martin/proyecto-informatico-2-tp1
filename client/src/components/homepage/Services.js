import styled from "styled-components";
// Kupa
const StyledServices= styled.section`
    /* section */
    display: block;
    width: 100%;
    padding: 5px;

    h1 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: #404040;
    }

    div {
        display: flex;
        height: fit-content;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    p {
        text-align: justify;
        font-family: Arial, Helvetica, sans-serif;
        font-size: clamp(10px, 2.02vw, 20px);
        color: var(--main-text-color);
    }

    p#collage {
        height: fit-content;
        min-width: 150px;
        margin: 0;
        flex-basis: 0;
        flex-grow: 1;
    }
    
    img {
        min-width: 400px;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
    }

`;

export default function Services(props) {
    return (
        <StyledServices id={props.id}>
            <h1>Servicios</h1>
            <div>
                <img src="./collage-servicios.jpg" alt="Un collage de nuestros productos" />
                <p id="collage">En Mi Solcito tenemos una amplia variedad de tortas y postres, ofreciendo varios servicios de repostería.<br /> Contamos con todo tipo de decorados, desde logos de compañías, escudos de escuelas, hasta personajes infantiles y de caricaturas, o cualquier otro diseño que pueda ser plasmado en un pastel o postre. Nuestros diseños pueden ser dibujados, realzados o con figurines. Además, contamos con una diversa variedad de sabores para los biscochos y rellenos para las tortas y postres.</p>
            </div>
            <p>Cubrimos cualquier tipo de eventos: Bodas, Cumpleaños, Baby Shower, Aniversarios, Empresariales, o cualquier otro tipo de festividad.   Los pedidos pueden ser realizados vía internet o en nuestras sucursales, donde podrás encontrar mesas para disfrutar nuestros postres en el local.</p>
        </StyledServices>
    )
}