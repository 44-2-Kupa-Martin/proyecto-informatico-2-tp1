import { useState } from "react";
import styled from "styled-components";

const StyledDiv= styled.div`
    margin: 10px 5px 10px 5px;
    background-color: aqua;
    height: 300px;
    width: 200px;
`;
export default function Product(props) {
    const {img, alt, name, description}= props.product;
    const [showFront, setShowFront]= useState(false);
    return (
        <StyledDiv className="flipCard" onClick={() => setShowFront(!showFront)}>
            {
                showFront ?
                    <div className="flipCardFront">
                        <img src={img} alt={alt} />
                        <h3>{name}</h3>
                        <button>Ver Más</button>
                    </div>
                :
                    <div className="flipCardBack">
                        <p>{description}</p>
                    </div>
            }
        </StyledDiv>
    );
}