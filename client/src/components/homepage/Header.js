import styled from "styled-components";
import Navbar from "../Navbar";
// Jowi
const StyledHeader= styled.header`
div.rss {
    display: flex;
    flex-direction: row-reverse;    

}


div.rss img{
        height: 50px;
        width: 50px;
        margin: 20px;
    }
    
div.inicio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}


div span{
    font-family: Arial, Helvetica, Sans-serif; 
    font-size: 30px;
    flex-direction: column;
    text-align: center;
    display: flex;
    justify-content: center;

}

div span h2{
    font-family: Arial, Helvetica, Sans-serif; 
    font-size: 27px;
    flex-direction: column;
    text-align: center;

}
`;

export default function Header(params) {
    return (
        <StyledHeader>
            <Navbar />
            <div className="formatCenter">

                <div className="inicio">
            
                <span>
                <h1>Mi solcito</h1>
                <h2>Sabores que te llevan a las estrellas</h2>
                </span>
                <img src="tortasaborpija.png" alt="tortasaborpija" id="tortapija"/>
                </div>
            
                <div className="rss">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="facebooklogo.png" alt="facebook" id="rss1"/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src="iglogo.png" alt="instagram" id="rss2" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src="twitterlogo.png" alt="twitter" id="rss3" /></a>
                </div>
            </div>
        </StyledHeader>
    )
}