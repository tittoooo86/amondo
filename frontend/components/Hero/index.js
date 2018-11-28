import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 48em) {
        margin-top: 33px;
    }
`;
const Title = styled.h1`
    font-family: trumpgothicpro, Inconsolata, Helvetica, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 52px;
    color: ${props => props.theme.white};
    letter-spacing: 0.6px;
    margin: 62px 0 0;

    @media (max-width: 48em) {
        text-align: center;
        line-height: 59px;
        margin: 84px 0 23px 7px;
    }

    span {
        position: relative;
        z-index: 0;
        color: ${props => props.theme.black};

        &:after {
            content: "";
            position: absolute;
            top: -6px;
            left: -8px;
            z-index: -1;
            width: 205px;
            height: 73px;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCAxOTIgNjYiPiAgPHBhdGggZmlsbD0iI0ZGRUEyNyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjIyMDI4MzUxIDEyLjMzMDA3MjM0TDE4NS45MzI0Nzk4NS44NDE4MTE4Mmw1Ljk4NjgzNDYyIDU2LjgyNTY3OTE1LTE4OS44NDkzNTc2MyA3LjYzMDI5NTJ6Ii8+PC9zdmc+");
        }
    }
`;

const Subtitle = styled.h2`
    color: ${props => props.theme.text};
    font-family: "franklin-gothic-urw", Helvetica, sans-serif;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
    margin: -13px 0 0;
    font-weight: 400;
    text-align: center;
`;

const Cta = styled.a`
    color: ${props => props.theme.white};
    font-family: "trumpgothicpro", Inconsolata, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px 0 20px;
`;

const Hero = () => (
    <Wrapper>
        <img src="/static/amondo-white.svg" alt="Amondo logo" />

        <Title>
            THE&nbsp; <span>EXPERIENCE</span>&nbsp; PLATFORM
        </Title>
        <Subtitle>
            Imprints bring the best content from the <br /> best live events
            together in one place.
        </Subtitle>

        <Cta href="mailto:hello@amondo.com">GET IN TOUCH →</Cta>
    </Wrapper>
);

export default Hero;
