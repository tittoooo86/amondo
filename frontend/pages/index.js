import Hero from "../components/Hero";
import Imprints from "../components/Imprints";
import Footer from "../components/Footer";

import styled from "styled-components";

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 0;
`;

const Home = props => (
    <Inner>
        <Hero />
        <Imprints />
        <Footer />
    </Inner>
);

export default Home;
