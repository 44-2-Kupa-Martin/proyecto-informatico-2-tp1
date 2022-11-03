import styled from "styled-components";
// Ghia
// 
const StyledFooter= styled.footer`
    .main-footer {
         display: flex;
         flex-direction: row;
         color: white;
         background-color: pink;
         justify-content: center;
         padding-top: 3em;
         width: 100%;
    }      
    ul{
        list-style: none;
        display: inline-block;
    }
    li{
      margin-bottom: 20px;
      margin-left: 10px;
    }
    label{
      display: block;
      font-family: 'Calibri';
    }
    div#Footer-loco{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    div#Footer-loco div{
      width:45%;
        padding-bottom: 10px;
    }
    h4{
      padding-left: 10px;
      padding-right: 10px;
      margin-left: 50px;
      font-family: 'Calibri';
    }
    li{
      margin-left:10px ;
      font-family: 'Calibri';
    }
    img{
      height: 10%;
      width: 10%;
      margin-left: 10px;
    } 
`;
export default function Footer(params) {
    return (
        <StyledFooter>
         <div className="main-footer">
                    <div id="Footer-loco">
                        <div>
                          <h4>MENU</h4>
                          <ul>
                            <li>Inicio</li>
                            <li>Productos</li>
                            <li>Nosotros</li>
                            <li>Contactanos</li>
                          </ul>
                        </div>   
                        <div>
                          <h4>CONTACTANOS</h4>
                          <ul>
                          <li>Direccion del local</li>
                            <li>Tel: 4596-9094</li>
                            <li>Nuestras Redes sociales</li>
                            <li id="redes"><a href="https://www.facebook.com"><img src="./Facebook.png" alt="Fc"/></a> <a href="https://www.instagram.com"><img src="./Instawhite.png" alt="inst"/></a> <a href="https://www.twitter.com"><img src="./Twitterwhite.png" alt="tw" /></a></li>
                          </ul>
                        </div>
                        <div>
                          <h4>AYUDA</h4>
                          <ul>
                          <li>Preguntas Frecuentes</li>
                            <li>Politicas de privacidad</li>
                            <li>Terminos y condiciones legales</li>
                            <li>C copyright 2022</li>
                          </ul>
                        </div>
                    </div>
            </div>
        </StyledFooter>
    )
}