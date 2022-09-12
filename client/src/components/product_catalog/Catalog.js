import styled from "styled-components";
import Product from "./Product";

const StyledDiv= styled.div`
    height: 900vh;
    align-self: stretch;
    flex-basis: 200px;
    flex-grow: 99999;
`;
export default function Catalog(props) {
    return (
        <StyledDiv>
            <Product product={{img:'./facturas.png', alt: 'yo mama', name: 'bruh', description: 'u dead'}} />
        </StyledDiv>
    );
}