import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const Normalize = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box
    }

    html {
        font-style: normal;
    }

    input {
        outline: none;
    }

    button {
        background-color: transparent;
        outline: none;
        border: none;
    }

    button, a {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: normal;
    }

    p,h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul, ol, li {
        padding: 0;
        margin: 0;
        list-style-position: inside;
    }

    ul li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    #modal-root {
        position: relative;
    }
`;
