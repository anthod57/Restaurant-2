import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0; 
        border: 0; 
    }

    *:focus {
        outline: none;
    }

    html {
        
    }


    html, body {
        background-color: black;
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 16px;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    button {
        padding: 1em 3em;
        background-color: #ffc500;
        color: black;
        font-size: 1em;
        transition: all 0.2s;
        cursor: pointer;
        font-weight: bold;

        &:hover {
            padding: 1em 3.5em;
        }
    }
`;