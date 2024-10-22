"use client";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./Styled";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer"

// Create global styles using createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    width: 100vw;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Next App</title>
      </head>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </>
      </ThemeProvider>
    </html>
  );
}
