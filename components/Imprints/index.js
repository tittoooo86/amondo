import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 160px;
`;
const Text = styled.p`
    color: ${props => props.theme.text};
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
    margin: 39px 0 30px 0;
    text-align: center;
    font-family: "franklin-gothic-urw", sans-serif;
`;

const Grid = styled.div`
    column-gap: 20px;
    column-width: 200px;
    column-count: 4;
    position: relative;
    z-index: 10;
`;

const Line = styled.div`
    position: absolute;
    bottom: 0;
    left: -30px;
    right: 0;
    width: 100vw;
    margin: 0 auto;
    height: 1px;
    background-color: #333333;
`;

const LargeCircle = styled.div`
    position: absolute;
    border-radius: 50%;
    background-color: #ffea27;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
    top: -90px;
    left: -120px;
    z-index: 0;
    width: 200px;
    height: 200px;
`;

const SmallCircle = styled.div`
    bottom: -10px;
    right: -20px;
    z-index: 0;
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
    background-color: #ffea27;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
`;

class Imprints extends Component {
    render() {
        return (
            <Wrapper>
                <Text>Check out some sample Imprints below 👇</Text>
                <Grid>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Grid>
                <Line />
                <LargeCircle />
                <SmallCircle />
            </Wrapper>
        );
    }
}

export default Imprints;
