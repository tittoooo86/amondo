import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
    height: 320px;
    width: 235px;
    margin-bottom: 20px;
    padding: 10px;
    background-size: cover;
    background-position: center;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: ${props => props.theme.gradient};
    }
`;

const Title = styled.h1`
    margin-top: auto;
    margin-bottom: 4px;
    font-family: "trumpgothicpro", Inconsolata, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme.white};
    letter-spacing: 0.5px;
    line-height: 28px;
    text-transform: uppercase;
    z-index: 1;
`;

const Subtitle = styled.h2`
    opacity: 0.6;
    font-family: "franklin-gothic-urw", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme.white};
    letter-spacing: 0;
    text-transform: uppercase;
    z-index: 1;
    margin: 0;
    line-height: 13px;
`;

const Card = () => (
    <Wrapper
        style={{
            backgroundImage:
                "url(https://res.amondo.com/amondo-media/image/upload/dpr_2.0,c_fill,w_300/v1542039196/RXZlbnRzMzAzM2ltYWdl.jpg)"
        }}
    >
        <Title>Clockenflap 2018</Title>
        <Subtitle>Central Harbourfront, Hong Kong · 9th Nov</Subtitle>
    </Wrapper>
);

export default Card;
