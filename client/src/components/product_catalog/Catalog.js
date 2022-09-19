import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CouldntFetch from "./catalog_components/CouldntFetch";
import EmptyResult from "./catalog_components/EmptyResult";
import Fetching from "./catalog_components/Fetching";
import Product from "./Product";

const StyledDiv= styled.div`
    align-self: stretch;
    flex-basis: 220px;
    flex-grow: 99999;

    .productList {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(1px, 220px));
        grid-auto-flow: row;
        justify-content: center;
    }
`;
export default function Catalog(props) {
    //  --Function Definitions--
    function filter(arr) {
        const options= ["filterCupcakes", "filterCakes", "filterCookies", "filterMacarons", "filterDesserts", "filterCroissants"];
        const query= [...searchParams.keys()];
        const allow= ["cupcakes", "cakes", "cookies", "macarons", "desserts", "croissants"];
        for (const key in options) {
            if (query.includes(options[key])) allow[key]= null; 
        }
        for (let index= allow.indexOf(null); index !== -1; index= allow.indexOf(null)) {
            allow.splice(index, 1);
        }
        const filteredByType= arr.filter((product) => allow.includes(product.type));
        if (searchParams.has('name')) {
            const searchQuery= searchParams.get('name').toLowerCase();
            return filteredByType.filter(product => product.name.toLowerCase().includes(searchQuery));
        }
        return filteredByType;
    }
    //

    //  --Function Body--
    const [products, setProducts]= useState(null);
    const [tooLong, setTooLong]= useState(false);
    const [fetchError, setFetchError]= useState(false);
    const [searchParams]= useSearchParams();

    useEffect(() => {
        //if 404 setFetchError. if success setProducts
        (async() => {
            try {
                const req= await fetch(`http://${window.location.hostname}:4000/api/products`);
                const reqBody= req.json();
                if (req.ok) {
                    setProducts(await reqBody);
                } else {
                    setFetchError(true);
                    console.log(req.status);
                }
            } catch (error) {
                setFetchError(true)
                console.log(error);
            }
        })();
    }, []);

    return (
        <StyledDiv>
            {props.scrollTo}
            <div className="productList">
                {(() => {
                    if (products) {
                        const filteredProducts= filter(products).map((product) => <Product key={product.id} product={product} />);
                        return filteredProducts.length ? filteredProducts : <EmptyResult />
                    } else if (fetchError) {
                        return <CouldntFetch />
                    } else {
                        setTimeout(() => {
                            if (!products) setTooLong(true);
                        }, 10000);
                        return <Fetching tooLong={tooLong}/>;
                    }
                })()}
            </div>
        </StyledDiv>
    );
}