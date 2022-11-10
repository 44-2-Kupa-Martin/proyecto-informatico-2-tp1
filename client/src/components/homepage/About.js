import styled from "styled-components";
// Winterish
const StyledAbout= styled.section`
    /*  Here you can write css. The css will cascade to all the children. 
        https://styled-components.com/docs
    */
    h1 {
        text-align: center;
        font-family: 'Calibri';
        font-weight: 600;
        color: #ad9046;
    }
    p{
        
        height: fit-content;
        margin: 0;
        padding: 5px;
        font-size: clamp(1rem, 2.18vw, 22px);
        flex-basis: 305px;
        flex-grow: 9999999;
    }
    div#nosotros1{
        display: flex;
        height: fit-content;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    img#local1 {
        width: 40%;
        height: 40%;
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
        height: auto;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        
    }
    img#local2 {
        height: auto;   
        width: 51%;
        height: 51%;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
        padding-left: 10px;
        align-self: flex-end;
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
            <p id="texto1"> Pareciera que fue ayer cuando un pequeño grupo de amigos inició un negocio que traeria alegria a los paladares de miles de personas. Actualmente somos una gran familia que hace 10 años se dedica a crear momentos placenteros en tu vida. ¿Cómo? Mediante nuestros postres originales, tortas únicas y muchas más de nuestras dulces creaciones.<br />Trabajamos con el objetivo de satisfacer las expectativas de nuestros clientes. Lo Hacemos con alegría, poniendo pasión y esmero para la elaboración diaria de nuestras propuestas gastronómicas,  procurando que esta siempre de la mayor calidad.</p>
            </div>
          <div id="nosotros2">
            <p>Hemos recorrido un largo camino para llegar a ser quienes somos y todo eso fue posible gracias a quienes nos apoyaron. <br />  Mi Solcito creció gracias a vos y seguirá acompañándote en los mejores momentos.<br /> Le invitamos a  contar con nosotros, esperamos siempre sorpenderle.</p>
            <img id="local2" src="./image2 - nosotros.jpg" alt="Nuestro local2"/>
          </div>  
                  
        </StyledAbout>
    )
}