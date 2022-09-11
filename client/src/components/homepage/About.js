import styled from "styled-components";
// Winterish
const StyledAbout= styled.section`
    /*  Here you can write css. The css will cascade to all the children. 
        https://styled-components.com/docs
    */
    h1 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: #404040;
    }
    p{
        text-align: justify;
        font-family: Arial, Helvetica, sans-serif;
        font-size: clamp(10px, 2.02vw, 20px);
        color: #595959;
        vertical-align: auto;
    }
    div#nosotros1{
        display: flex;
        height: fit-content;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    img#local1 {
        min-width: 400px;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
    }
    p#texto2{
        height: fit-content;
        min-width: 150px;
        margin: 0;
        flex-basis: 0;
        flex-grow: 1;
    }
    div#nosotros2{
        display: flex;
        height: fit-content;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
    img#local2 {
        width: 442px;
        height: 338px;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
    }   
    p#texto1{
        height: fit-content;
        min-width: 150px;
        margin: 0;
        flex-basis: 0;
        flex-grow: 1;
    }
`;

export default function About(params) {
    return (
        <StyledAbout id={params.id}>
          <h1>Nosotros</h1>
          <div id="nosotros1">
          <img id="local1" src="./image1 - nosotros.jpg" alt="Nuestro local" />
            <p id="texto1"> Pareciera que fue ayer cuando un pequeño grupo de amigos inició un negocio que traeria alegria a los paladares de miles de personas. Actualmente somos una gran familia que hace 10 años se dedica a crear momentos placenteros en tu vida. ¿Cómo? Mediante nuestros postres originales, tortas únicas y muchas más de nuestras dulces creaciones.<br />Trabajamos con el objetivo de satisfacer las expectativas de nuestros clientes. Lo Hacemos con alegría, poniendo pasión y esmero para la elaboración diaria de nuestras propuestas gastronómicas,procurando que esta siempre de la mayor calidad</p>
            </div>
          <div id="nosotros2">
            <p>Hemos recorrido un largo camino para llegar a ser quienes somos y todo eso fue posible gracias a quienes nos apoyaron. <br />  Mi Solcito creció gracias a vos y seguirá acompañándote en los mejores momentos.<br /> Le invitamos a  contar con nosotros, esperamos siempre sorpenderle</p>
            <img id="local2" src="./image2 - nosotros.jpg" alt="Nuestro local2"/>
          </div>  
                  
        </StyledAbout>
    )
}