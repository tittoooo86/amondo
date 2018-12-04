import styled from "styled-components";

export const Wrapper = styled.div`
    /* max-width: 1200px;
    padding: 0 12px;
    margin: 0 auto; */
`;

export const ImprintContentWrapper = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2px;
    max-width: 76em;
`;
export const StyledImprintHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0px 53px;
`;

export const Logo = styled.img``;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
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

    &:after {
        content: "";
        bottom: 0px;
        width: 100%;
        height: 20%;
        left: 0px;
        right: 0px;
        display: block;
        position: absolute;
        background: ${props => props.theme.gradient};
    }
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
    margin-bottom: 85px;

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

export const GridContainer = styled.div`
    max-width: 1210px;
    margin: 0 auto;
`;
export const GridItem = styled.div`
    width: calc(33.33% - 20px);
    padding-bottom: 15px;

    img {
        width: 100%;
        background: ${props => props.theme.yellow};
    }
`;

//
// FOOTER
//

export const StyledFooter = styled(ImprintContentWrapper)`
    @media screen and (min-width: 48em) {
        padding: 19px 2px 19px !important;
    }
`;

export const FooterMessage = styled.div`
    height: 60vh;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    h1 {
        color: ${props => props.theme.text};
        font-weight: 500;
        line-height: 1.2;
        text-align: center;
        font-family: franklin-gothic-urw, Helvetica, sans-serif;
        font-size: 2em;
        padding-top: 17px;

        @media screen and (min-width: 48em) {
            font-size: 32px;
        }

        span {
            color: ${props => props.theme.white};
            text-decoration: underline;
        }
    }
`;

export const FooterMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;

    @media screen and (min-width: 48em) {
        flex-direction: row;
    }

    h3 {
        font-size: 18px;
        font-weight: 300;
        color: rgb(125, 125, 125);
        letter-spacing: 3px;
        margin-top: 0px;
        margin-bottom: 10px;
        font-family: "trumpgothicpro", Inconsolata, Helvetica, sans-serif;
    }
`;

export const Social = styled.div`
    @media screen and (min-width: 48em) {
        text-align: left;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    user-select: none;
    -webkit-box-pack: center;
    justify-content: center;

    @media screen and (min-width: 48em) {
        justify-content: flex-start;
    }
`;
export const Icon = styled.a`
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.08);
    width: 45px;
    height: 45px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(92, 92, 92);
    border-image: initial;

    @media screen and (min-width: 48em) {
        width: 58px;
        height: 58px;
    }

    svg {
        height: 14px;
    }
`;

export const AppStoreButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;
