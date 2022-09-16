import { useState } from "react";
import styled from "styled-components";

const StyledDiv= styled.div`
    height: 300px;
    width: 200px;
    margin: 30px 10px 30px 10px;
    border: 1px solid black;
    transform: rotateY(${({showFront}) => showFront ? 0 : 180}deg);
    transform-style:  preserve-3d;
    transition: transform 1s ease-in-out;

    img {
        width: 100%;
        border: 1px solid black;
    }

    .front {
        height: 300px;
        width: 200px;
        padding: 10px;
        position: absolute;
        top: 0;
        backface-visibility: hidden;
    }

    .back {
        height: 300px;
        width: 200px;
        padding: 10px;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        position: absolute;
        top: 0;
    }

    h3 {
        font-family: var(--main-font);
        text-align: center;
    }

    button {
        display: block;
        margin: 0 auto 0 auto;
        width: 50%;
        height: 10%;
        border: 1px solid var(--link-color);
        border-radius: 10px;
    }

`;
export default function Product(props) {
    const [showFront, setShowFront]= useState(true);
    const {img, alt, name, description}= props.product;
    return (
        <StyledDiv showFront={showFront} className="flipCard">
            <div className="front">
                <img src={img} alt={alt} />
                <h3>{name}</h3>
                <button onClick={() => setShowFront(!showFront)}>Ver Más</button>
            </div>
            <div className="back" onClick={() => setShowFront(!showFront)}>
                <p>{description}</p>
            </div>
        </StyledDiv>
    );
}