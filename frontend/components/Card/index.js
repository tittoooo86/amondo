import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import moment from "moment";
import NProgress from "nprogress";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
    height: 320px;
    margin-bottom: 20px;
    padding: 10px;
    background-size: cover;
    background-position: center;
    background-color: ${props => props.theme.yellow};
    cursor: pointer;

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

const Card = ({ item }) => (
    <Link
        href={{
            pathname: "/imprint",
            query: { id: item.id }
        }}
    >
        <a onClick={() => NProgress.start()}>
            <Wrapper
                style={{
                    backgroundImage: `url(${item.image})`
                }}
            >
                <Title>{item.artist}</Title>
                <Subtitle>
                    {item.location} · {moment(item.startDate).format("Do MMM")}
                </Subtitle>
            </Wrapper>
        </a>
    </Link>
);

Card.propTypes = {
    item: PropTypes.shape({
        artist: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired
    })
};

export default Card;
