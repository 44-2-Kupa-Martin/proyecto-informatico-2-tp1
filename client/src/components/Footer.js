import styled from "styled-components";
// Ghia
const StyledFooter= styled.footer`
    .main-footer {
        
         display: flex;
         flex-direction: row;
         color: white;
         background-color: grey;
         padding-top: 3em;
         width: 100%;
}       

    ul{

        list-style: none;
        
        

    }
    .col2{
        
       

    }
    .col3{
        

    }

`;
export default function Footer(params) {
    return (
        <StyledFooter>
           <div className="main-footer">
          {/* Column1 */}
          <div className="col1">
            <h4>Menu</h4>
                <ul>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Nosotros</li>
              <li>Contáctanos</li>
              </ul>
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>Contactanos</h4>
            <ul className="list-unstyled">
              <li>Direccion del local</li>
              <li>Tel: 4596-9094</li>
              <li>Nuestras redes sociales</li>
              <li>Face instanashe tuiter</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>Ayuda</h4>
            <ul className="list-unstyled">
              <li>Preguntas Frecuentes</li>
              <li>Políticas De Privacidad</li>
              <li>Términos y Condiciones Legales</li>
              <li>C Copyright 2022</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          
        </div>
        </StyledFooter>
    )
}