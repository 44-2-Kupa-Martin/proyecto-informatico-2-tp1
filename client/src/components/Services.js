import styled from "styled-components";

const StyledServices= styled.section`
    /*  Here you can write css. The css will cascade to all the children. 
        https://styled-components.com/docs
    */
    color: red;
`;

export default function Services(params) {
    return (
        <StyledServices>
            Here you can write html
            https://reactjs.org/docs/hello-world.html
            {/* And here you can write javascript. Remember to enclose it in curly braces. 
                https://developer.mozilla.org/en-US/docs/Web/JavaScript
            */}
        </StyledServices>
    )
}