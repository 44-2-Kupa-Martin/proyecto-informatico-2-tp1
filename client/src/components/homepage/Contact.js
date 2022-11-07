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
        margin: 0 10px 10px 0;
        flex-basis: 400px;
        flex-grow: 1;
    }
    div#lol{
        display: flex;
        flex-flow: row wrap;
        height: fit-content;
    }
    img#primagen{
        margin: 0 auto 10px auto;
        max-width: 50%;
        width: 50%;
        height: 50%;
        flex-basis: 350px;
        flex-grow: 1;
        
    }
    .mybox{
        display: inline-flex;
        margin: 0 auto 10px auto;
        width: 400px;
        flex-flow: column;
        justify-content: space-between;
        border: solid 1px black;
        padding: 10px;
    }
    div#moyajumpscare{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        padding-bottom: 10px;
    }
    label{
       display: block;
        font-family: 'Calibri';
        margin-bottom: 10px;
    }
    div#moyajumpscare div{
        width:45%;
    }
    div#moyajumpscare input{
        width:100%;
    }
    input{
        display: block;
        width: 100%;
        border-style: none;
        border-bottom: solid 1px;
        margin-bottom: 10px;
        border-color: pink;

    }
    button {
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
                            <label htmlFor="surname">Apellido</label> 
                            <input required type="text" id="surname" name="surname"></input>
                        </div>
                    </div>    
                    <div>
                        <label id="email" htmlFor="email">Email *</label> 
                        <input required type="text" id="email" name="email"></input>
                    </div>
                    <div>
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