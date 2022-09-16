import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv= styled.div`
    margin: 10px 5px 10px 5px;
    background-color: aqua;
    height: 300px;
    width: 200px;
    transform-style:  preserve-3d;
    transition: transform 1s ease-in-out;
    transform: rotateY(${({showFront}) => showFront ? 0 : 180}deg);

    .front {
        height: 300px;
        width: 200px;
        position: absolute;
        top: 0;
        backface-visibility: hidden;
    }

    .back {
        height: 300px;
        width: 200px;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        position: absolute;
        top: 0;
    }
`;
export default function Product(props) {
    const [showFront, setShowFront]= useState(true);
    const [fetched, setFetched]= useState(false);
    useEffect(() => {
        (async() => {
            console.log('s');
            setFetched(true);
        })();
    }, []);
    const {img, alt, name, description}= props.product;
    return (
        <StyledDiv showFront={showFront} className="flipCard">
            {fetched ?
                <>
                <div className="front">
                    <img src={img} alt={alt} />
                    <h3>{name}</h3>
                    <button onClick={() => setShowFront(!showFront)}>Ver Más</button>
                </div>
                <div className="back" onClick={() => setShowFront(!showFront)}>
                    <p>{description}</p>
                </div>
                </>
            :
                <p>bruhhhhhh</p>
            }
        </StyledDiv>
    );
}