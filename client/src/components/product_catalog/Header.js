import styled from "styled-components";
import Navbar from "../Navbar";
import SearchBar from "./SerachBar";

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
        justify-content: center;
    }
`;

export default function Header(props) {
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