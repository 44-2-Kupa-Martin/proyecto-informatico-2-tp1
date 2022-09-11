import styled from "styled-components";
import Navbar from "../Navbar";
// Jowi
const StyledHeader= styled.header`
   img#rss {

    }

    img#rss { 
        display: flex;
        flex-direction: row-reverse;
        height: 50px;
        width: 50px;
        margin-left: 3px;
        margin-right: 3px;

    }
    color: black;
`;

export default function Header(params) {
    return (
        <StyledHeader>
            <Navbar />
            <div className="formatCenter">
                <h1>Mi solcito</h1>
                <h2>Sabores que te llevan a las estrellas</h2>
                <img src="tortasaborpija.png" alt="tortasaborpija"/>
                <div id="rrss">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="facebooklogo.png" alt="facebook" id="rss" /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src="iglogo.png" alt="instagram" id="rss" /></a>
                    <a href="https://www.pornhub.com" target="_blank" rel="noreferrer"><img src="twitterlogo.png" alt="twitter" id="rss" /></a>
                </div>
            </div>
        </StyledHeader>
    )
}