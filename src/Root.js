import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from 'theme/theme';
import logo from 'logo.svg';

const StyledWrapper = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledImage = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledLink = styled.a`
  color: ${({ theme: T }) => T.color.blue};
`;

const Root = () => (
  <HelmetProvider>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledHeader>
          <StyledImage src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <StyledLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </StyledLink>
        </StyledHeader>
      </StyledWrapper>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
