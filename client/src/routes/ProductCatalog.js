import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/product_catalog/Header";
import Footer from "../components/Footer";
import Catalog from "../components/product_catalog/Catalog";
import Sidebar from "../components/product_catalog/Sidebar";
const StyledDiv= styled.div`
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
export default function ProductCatalog(props) {
    const [searchParams, setSearchParams]= useSearchParams();
    return (
        <StyledDiv className="easeIn">
            <Header setSearchParams={setSearchParams} />
            <main className="formatCenter">
                <Sidebar setSearchParams={setSearchParams} />
                <Catalog searchParams={searchParams} />
            </main>
            <Footer />
        </StyledDiv>
    );
}