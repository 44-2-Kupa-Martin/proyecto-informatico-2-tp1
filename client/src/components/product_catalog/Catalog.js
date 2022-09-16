import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    const [products, setProducts]= useState(undefined);
    const [searchParams]= useSearchParams();
    function filter(arr) {
        // const options= ["filterCupcakes", "filterCakes", "filterCookies", "filterMacarons", "filterDesserts", "filterCroissants"];
        // const queryKeys= Array.from(searchParams.keys());
        // queryKeys.map((key) => {
        //     options.includes(key);
        // });
        // return arr.filter((product) => {
        //     return query.includes(product.type);
        // });
    }
    useEffect(() => {
        (async() => {
            const ok= [
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead1', type: 'cupcake'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead2', type: 'cake'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead3', type: 'cookie'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead4', type: 'dessert'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead5', type: 'cupcake'}} />,
                <Product product={{img:'./Balcarce.jpg', alt: 'yo mama', name: 'bruh', description: 'u dead6', type: 'cupcake'}} />
            ];
            setProducts(ok);
        })();
    }, []);
    return (
        <StyledDiv>
            {products ?
                filter(products)
            :
                <p>bruh</p>}
        </StyledDiv>
    );
}