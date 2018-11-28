import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1160px;
    padding: 0 12px;
    margin: 0 auto;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 63px 0px 53px;
`;

export const Logo = styled.img`
    margin-top: -13px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.p`
    color: ${props => props.theme.text};
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 4px;
    line-height: 24px;
    margin: 1px 20px 0 0;
    font-family: "trumpgothicpro", Inconsolata, Helvetica, sans-serif;

    span {
        color: ${props => props.theme.white};
    }
`;

export const Bg = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background-size: cover;
    opacity: 0.4;
    display: block;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const Artist = styled.h1`
    font-size: 55px;
    font-weight: 600;
    text-transform: uppercase;
    overflow-wrap: break-word;
    font-family: trumpgothicpro, Inconsolata, Helvetica, sans-serif;
    margin: 0px 0px 60px;
    color: ${props => props.theme.white};
    line-height: 1;
    letter-spacing: 4px;

    @media (min-width: 30em) {
        font-size: 66px;
    }

    @media (min-width: 48em) {
        font-size: 112px;
    }

    @media (min-width: 64em) {
        font-size: 144px;
    }
`;

export const Details = styled.div`
    display: flex;

    > div {
        display: flex;
        justify-content: space-between;
        @media (min-width: 48em) {
            margin-right: 50px;
        }
    }

    svg {
        margin-right: 20px;
    }
`;

export const DetailsText = styled.p`
    font-size: 18px;
    font-family: "franklin-gothic-urw", Helvetica, sans-serif;
    font-weight: 400;
    margin: 2px 5px 0 0;
    color: ${props => props.theme.white};
    line-height: 1;

    @media (min-width: 48em) {
        font-size: 22px;
    }

    span {
        display: block;
        font-size: 14px;
        font-family: "franklin-gothic-urw", Helvetica, sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.6;
        margin-top: 5px;
    }
`;
