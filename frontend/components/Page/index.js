import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "../Meta";

const theme = {
    black: "#000000",
    yellow: "#ffe927",
    text: "#b3b3b3",
    white: "#ffffff",
    maxWidth: "1040px",
    bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
    gradient: "linear-gradient(-180deg, transparent, rgba(0, 0, 0, 0.9) 97%);"
};
const StyledPage = styled.div`
    background: ${props => props.theme.black};
    color: ${props => props.theme.text};
    position: relative;
    z-index: 0;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'franklin-gothic-urw', sans-serif;
    background: #000;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'franklin-gothic-urw', sans-serif; }
`;
export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    {this.props.children}
                </StyledPage>
            </ThemeProvider>
        );
    }
}
