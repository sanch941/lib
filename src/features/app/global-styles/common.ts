import { createGlobalStyle } from 'styled-components';

export const Common = createGlobalStyle`
    html {
        font-family: 'Gilroy', 'Calibri', sans-serif;
        font-size: 16px;
    }

    body {
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #fff;
        color: #1c1526;
        line-height: 1.15;
    }
    #modal-root{
        position: relative;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
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

`;
