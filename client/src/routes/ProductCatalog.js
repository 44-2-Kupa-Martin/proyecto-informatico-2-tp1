import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/product_catalog/Header";
import Footer from "../components/Footer";
import Catalog from "../components/product_catalog/Catalog";
import Sidebar from "../components/product_catalog/Sidebar";
import { useRef } from "react";
const StyledDiv= styled.div`
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
export default function ProductCatalog(props) {
    const refTop= useRef(null);
    return (
        <StyledDiv className="easeIn">
            <Header />
            <main className="formatCenter">
                <Sidebar scroll={() => refTop.current.scrollIntoView()} />
                <Catalog scrollTo={<div ref={refTop} />} />
            </main>
            <Footer />
        </StyledDiv>
    );
}