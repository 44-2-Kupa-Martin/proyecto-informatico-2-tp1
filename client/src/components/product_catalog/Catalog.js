import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const StyledDiv= styled.div`
    align-self: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 200px;
    flex-grow: 99999;
`;
export default function Catalog(props) {
    const [products, setProducts]= useState([]);
    useEffect(() => {
        (async() => {
            const ok= [
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead1'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead2'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead3'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead4'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead5'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead6'}} />
            ]
            console.log('nashe');
            setProducts(ok);
        })();
    }, []);
    return (
        <StyledDiv>
            {
                products || <p>bruh</p>
            }
        </StyledDiv>
    );
}