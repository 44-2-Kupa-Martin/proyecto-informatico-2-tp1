import styled from "styled-components";
import Navbar from "../Navbar";
import SearchBar from "./header_components/SerachBar";
// --CSS (StyledHeader)--
const StyledHeader= styled.header`
    .banner {
        background-image: url('./productos-background.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        width: 100%;
        height: 400px;
        flex-direction: column;
        align-items: center;
    }
    .banner h1 {
        font-family: var(--main-font);
        font-weight: bolder;
        font-size: 3.5rem;
        color: white;
        margin-top: 100px;
    }
`;

export default function Header(props) {
    // --Component body--
    return (
        <StyledHeader>
            <Navbar />
            <div className="banner">
                <h1>Productos</h1>
                <SearchBar />                
            </div>
        </StyledHeader>
    );
}