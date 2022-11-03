import styled from "styled-components";
// Winterish
const StyledContact= styled.section`
    h1 {
        text-align: center;
        font-family: 'Calibri';
        font-weight: 600;
        color: #ad9046;
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
        height: 50%;
        margin: 0 10px 10px 0;
        flex-basis: 0;
        flex-grow: 1;
        
    }
    .mybox{
        border: solid 1px black;
        margin: 0px 10px 10px 10px;
        padding: 10px;
        height: 322px;
        border-color: pink;
    }
    div#moyajumpscare{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    label{
       display: block;
        font-family: 'Calibri';
        margin-bottom: 10px;
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
        border-color: pink;

    }
    div#lol2{
        padding-bottom: 20px;
    }
    button {
        margin-top: 50px;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-family: 'Calibri';
        background: #393939;
        border-radius: 62.5px;
        width: 130px;
        height: 30px;
        background-color: pink;
    }
    button:hover {
        background-color: rgb(197, 123, 112);
        text-align: center;
        transition: all 0.5s ease-out;
    }
`;
export default function Contact(props) {   
    
    function handlesubmit (event) {
        event.preventDefault()
        const form = new FormData(event.target)
        const Chano = new URLSearchParams(form)
      
        fetch(`http://${window.location.hostname}/api/messages`,{
            method: "POST",
            body: Chano,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

    }

    return (
        <StyledContact id={props.id}>
            <h1>Contacto</h1>
            <div id="lol">
                <img src="./draw.png" alt="contacto"id="primagen"/>
                
                <form onSubmit={handlesubmit} className="mybox" >
                    <div id="moyajumpscare">
                        <div>
                            <label htmlFor="name">Nombre</label> 
                            <input required type="text" id="name" name="name"></input>
                        </div>   
                        <div>
                            <label htmlFor="surname">apellido</label> 
                            <input required type="text" id="surname" name="surname"></input>
                        </div>
                    </div>    
                    <div id="lol2">
                        <label id="email" htmlFor="email">Email *</label> 
                        <input required type="text" id="email" name="email"></input>

                        <label htmlFor="escriba">Escriba un Mensaje </label> 
                        <input required type="text" id="escriba" name="escriba"></input> 
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </StyledContact>
    )

 
    
}
//form.addEventListener('submit', function(event){
  //  event.preventDefault();
        
   // const loca = new FormData(form);

 //   console.log (loca)

 //   fetch('http://localhost:3306/api/messages',{
  //      method: "POST",
  //      body: loca,
  //  })
   // .then(res => res.json())
   // .then(data => console.log(data))
   // .catch(err => console.log(err));
//})