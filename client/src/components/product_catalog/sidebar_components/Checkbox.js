import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
// --CSS (StyledListItem)--
const StyledListItem= styled.li`
    display: flex;
    align-items: flex-end;
    margin: 5px 0 5px 0;
    
    ${/* http://csscheckbox.com/css-checkbox-generator.php */''}

    .css-checkbox { 
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; 
        width: 1px; 
        margin: -1px; 
        padding: 0; 
        border: 0; 
    }
    .css-checkbox + label { 
        user-select: none;
        position: relative; 
        font-size: 12px; 
        cursor: pointer; 
        display: inline-flex; 
        align-items: center; 
        height: 16px; 
        color: rgb(0, 0, 0); 
    }
    .css-checkbox + label::before { 
        content: " "; 
        display: inline-block; 
        vertical-align: middle; 
        margin-right: 3px; 
        width: 12px; 
        height: 12px; 
        background-color: white; 
        border-width: 1px; 
        border-style: solid; 
        border-color: rgb(0,0,0);
        border-radius: 2px; 
        box-shadow: none; 
    }
    .css-checkbox + label::after { 
        content: " "; 
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+"); 
        background-repeat: no-repeat; 
        background-size: 8px 8px; 
        background-position: center center; 
        position: absolute; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        margin-left: 0px; 
        left: 0px; 
        top: 0px; 
        text-align: center; 
        background-color: transparent; 
        font-size: 10px; 
        height: 14px; 
        width: 14px; 
    }

    .css-checkbox:checked + label::before {
        border-color: rgb(204, 204, 204); 
    }

    .css-checkbox:checked + label::after {
        display: none;
    }

`;

export default function Checkbox(props) {
    // --Component Body--
    const [searchParams]= useSearchParams();
    return (
        <StyledListItem>
            <input 
                className="css-checkbox" 
                type="checkbox" 
                id={props.id} 
                name={props.name} 
                checked={searchParams.has(props.name)} 
                />
            <label htmlFor={props.id}>{props.children}</label>
        </StyledListItem>
    );
}