import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";


const StyledForm= styled.form`
    width: 50%;
    height: 40px;
    display: flex;

    .hide {
        display: none;
    }
    input {
        height: 100%;
        flex-basis: content;
        flex-grow: 10;
        border-radius: 15px 0 0 15px;
        border: 1px solid lightgrey;
        border-right: none;
        outline: none;
        padding-left: 10px;
        font-size: 1rem;
    }
    button {
        height: 100%;
        flex-basis: content;
        flex-grow: 1;
        border-radius: 0 15px 15px 0;
        border: 1px solid lightgray;
        border-left: none;
        background-color: white;
        outline: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #d9d9d9;
    }
    input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration {
        display: none;
    }
    i {
        font-size: 1rem;
    }
`;

export default function SearchBar(props) {
    const [searchParams, setSearchParams]= useSearchParams();
    const [inputValue, setInputValue]= useState(searchParams.has('name') ? searchParams.get('name') : "");
    function handleSubmit(event) {
        event.preventDefault();
        const [key, value]= (new FormData(event.target)).entries().next().value;
        if (value) {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }
        setSearchParams(searchParams);
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="searchbox">
                <span className="hide">Search product</span>
            </label>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="search" name="name" id="searchbox" placeholder="Search product" />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </StyledForm>
    );
}