import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    padding: 80px 0;
`;

const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    /* padding: 0 20px; */
    display: flex;
    justify-content: space-between;
`;

const Column = styled.div`
    float: left;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const Link = styled.a`
    color: ${props => props.theme.text};
    display: block;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 0;
    margin: 0 0 6px 0;
    line-height: 20px;

    &:hover {
        text-decoration: underline;
    }
`;

const Address = styled.p`
    font-size: 14px;
    letter-spacing: 0;
    margin: 0 0 6px 0;
    line-height: 20px;
    color: rgba(184, 184, 184, 0.4);
`;

const Footer = () => (
    <Wrapper>
        <Container>
            <Column>
                <img src="./static/zaggy_white.svg" alt="" />
            </Column>
            <Column>
                <List>
                    <li>
                        <Link href="/app">Amondo App</Link>
                    </li>
                    <li>
                        <Link href="/app">Blog</Link>
                    </li>
                </List>
            </Column>
            <Column>
                <List>
                    <li>
                        <Link href="/app">Instagram</Link>
                    </li>
                    <li>
                        <Link href="/app">Twitter</Link>
                    </li>
                    <li>
                        <Link href="/app">Facebook</Link>
                    </li>
                </List>
            </Column>
            <Column>
                <List>
                    <li>
                        <Link href="/app">Terms of Service</Link>
                    </li>
                    <li>
                        <Link href="/app">Privacy Policy</Link>
                    </li>
                </List>
            </Column>
            <Column>
                <Address>
                    86-90 Paul Street, <br />
                    London, EC2A 4NE
                </Address>
                <Link href="mailto:hello@amondo.com">hello@amondo.com</Link>
            </Column>
        </Container>
    </Wrapper>
);

export default Footer;
