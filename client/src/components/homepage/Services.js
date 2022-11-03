import styled from "styled-components";
// Kupa
// --CSS (StyledSection)--
const StyledSection= styled.section`
    /* section */
    display: block;
    width: 100%;
    padding: 5px;

    h1 {
        text-align: center;
        font-family: 'Calibri';
        font-size: var(--responsive-title-size);
        font-weight: 600;
        color: #ad9046;
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
        font-family: 'Calibri';
    }

    p#collage {
        height: fit-content;
        margin: 0;
        padding: 5px;
        font-size: clamp(1rem, 2.18vw, 22px);
        flex-basis: 305px;
        flex-grow: 9999999;
    }
    
    img {
        width: 55%;
        flex-grow: 1;
    }

`;

export default function Services(props) {
    // --Component Body--
    return (
        <StyledSection id={props.id}>
            <h1>Servicios</h1>
            <div>
                <img src="./collage-servicios.jpg" alt="Un collage de nuestros productos" />
                
                <p id="collage">En Mi Solcito tenemos una amplia variedad de tortas y postres, ofreciendo varios servicios de repostería.<br /> Contamos con todo tipo de decorados, desde logos de compañías, escudos de escuelas, hasta personajes infantiles y de caricaturas, o cualquier otro diseño que pueda ser plasmado en un pastel o postre. Nuestros diseños pueden ser dibujados, realzados o con figurines. Además, contamos con una diversa variedad de sabores para los biscochos y rellenos para las tortas y postres.</p>
            </div>
            <p>Cubrimos cualquier tipo de eventos: Bodas, Cumpleaños, Baby Shower, Aniversarios, Empresariales, o cualquier otro tipo de festividad.   Los pedidos pueden ser realizados vía internet o en nuestras sucursales, donde podrás encontrar mesas para disfrutar nuestros postres en el local.</p>
        </StyledSection>
    )
}