import styled, { css } from 'styled-components';

interface Props {
    isLoading?: boolean;
}

export const loaderStyles = css`
    border: 2px solid #f3f3f3;
    border-top: 2px solid #625e6e;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 0.5s linear infinite;
`;

export const Loader = styled.div<Props>`
    ${loaderStyles}
    opacity: ${({ isLoading }) => (isLoading ? '1' : '0')};
`;
