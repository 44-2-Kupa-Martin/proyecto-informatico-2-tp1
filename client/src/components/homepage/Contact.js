import styled from "styled-components";
// Winterish
const StyledContact= styled.section`
    h1 {
        text-align: center;
        font-family: 'Calibri';
        font-weight: 600;
        color: #404040;
    }
    p{
        text-align: justify;
        font-family: 'Calibri';
        font-size: clamp(10px, 2.02vw, 20px);
        color: #595959;
        vertical-align: auto;
    }
    img#contacto1{
        min-width: 400px;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
    }
    div#lol{
        display: flex;
        height: fit-content;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    img#primagen{
        max-width: 50%;
        width: 50%;
        height: fit-content;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
        
    }
    .mybox{
        border: solid 1px black;
        margin: 10px 10px 10px 10px;
        padding: 10px;
    }
    div#moyajumpscare{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    label{
        display: block;
        font-family: 'Calibri';
    }
    div#moyajumpscare div{
        width:45%;
        padding-bottom: 10px;
    }
    div#moyajumpscare input{
        width:100%;
    }
    input{
        border-style: none;
        border-bottom: solid 1px;
        margin-bottom: 10px;

    }
    div#lol2{
        padding-bottom: 20px;
    }
    button {
        background-color: grey;
        border: none;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 50%;
        font-family: 'Calibri';
    }
`;
export default function Contact(props) {    
    return (
        <StyledContact id={props.id}>
            <h1>Contacto</h1>
            <div id="lol">
                <img src="./draw.png" alt="contacto"id="primagen"/>
                
                <form onSubmit={(event)=>event.preventDefault()} className="mybox" >
                    <div id="moyajumpscare">
                        <div>
                            <label htmlFor="name">Nombre</label> 
                            <input type="text" id="name" name="name"></input>
                        </div>   
                        <div>
                            <label htmlFor="surname">apellido</label> 
                            <input type="text" id="surname" name="surname"></input>
                        </div>
                    </div>    
                    <div id="lol2">
                        <label id="email" htmlFor="email">Email *</label> 
                        <input type="text" id="email" name="email"></input>

                        <label htmlFor="escriba">Escriba un Mensaje </label> 
                        <input type="text" id="escriba" name="escriba"></input> 
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </StyledContact>
    )
}