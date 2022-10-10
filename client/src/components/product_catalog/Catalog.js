import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CouldntFetch from "./catalog_components/CouldntFetch";
import EmptyResult from "./catalog_components/EmptyResult";
import Fetching from "./catalog_components/Fetching";
import Product from "./catalog_components/Product";
// --CSS (StyledDiv)--
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

    /**
     * This function takes user input from the search parameters and filters an array of objects with said input.
     * It filters the objects based on the object.type and object.name properties.
     * @param {Array<Object>} arr An array of objects.
     * @returns {Array<Object>} The filtered array.
     */
    function filter(arr) {
        // Expected search params keys
        const options= ["filterCupcakes", "filterCakes", "filterCookies", "filterMacarons", "filterDesserts", "filterCroissants"];
        // The different types of products. These are needed for comparison with the object.type properties
        const allow= ["cupcakes", "cakes", "cookies", "macarons", "desserts", "croissants"];
        // The values are not needed since the mere presence of the key implies its value as true
        const query= [...searchParams.keys()];


        for (const key in options) {
            // If the key is present, then it must be filtered. So allow is set to null
            if (query.includes(options[key])) allow[key]= null; 
        }

        // Remove all nulls from allow.
        for (let index= allow.indexOf(null); index !== -1; index= allow.indexOf(null)) allow.splice(index, 1);

        // If product.type is not present in allow, then filter it
        const filteredByType= arr.filter((product) => allow.includes(product.type));

        // If there is user input for the object name, filter based on it
        if (searchParams.has('name')) {
            const searchQuery= searchParams.get('name').toLowerCase();
            // If the user provided string is not a substring of the product.name, then filter it.
            const filteredByTypeAndName= filteredByType.filter(product => product.name.toLowerCase().includes(searchQuery));
            return filteredByTypeAndName;
        }
        // Else, just return
        return filteredByType;
    }
    //




    //  --Component Body--
    const [products, setProducts]= useState(null);
    const [tooLong, setTooLong]= useState(false);
    const [fetchError, setFetchError]= useState(false);
    const [searchParams]= useSearchParams();


    // This effect fetches the array of products on render, and saves it to the products state hook.
    useEffect(() => {
        // The IIFE is necessary because the useEffect's callback cannot be an async function 
        (async() => {
            try {
                const req= await fetch(`http://${window.location.hostname}/api/products`);
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
            <div className={products ? "productList" : "feedbackContainer"}>
                {// This IIFE determines what to show to the user and handles fetch errors
                (() => {
                    // If the products were successfully fetched 
                    if (products) {
                        // Filter them
                        const filteredProducts= filter(products).map((product) => <Product key={product.id} product={product} />);
                        // If there are no products left, show <EmptyResult />. Else, show the products
                        return filteredProducts.length ? filteredProducts : <EmptyResult />
                    } else if (fetchError) {
                        return <CouldntFetch />
                    } else {
                        // If after 10 seconds, the products aren't fetched yet there is no fetch error, update the UI
                        setTimeout(() => {
                            if (!products && !fetchError) setTooLong(true);
                        }, 10000);
                        return <Fetching tooLong={tooLong} />;
                    }
                })()}
            </div>
        </StyledDiv>
    );
}