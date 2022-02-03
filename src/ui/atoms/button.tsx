import { pxToRem } from '@lib';
import styled, { css } from 'styled-components';
import { loaderStyles } from './loader';

type Target = 'card-remove' | 'submit';

const getCssByTarget = (target: Target) => {
    switch (target) {
        case 'card-remove':
            return css`
                border: 1px solid #1c1526;
                padding: 5px 10px;
                border-radius: 5px;
                text-decoration: none;
                font-size: ${pxToRem(16)};
            `;
        case 'submit':
            return css``;
        default:
            return css``;
    }
};

interface Props {
    target?: Target;
    isLoading?: boolean;
}

export const Button = styled.button<Props>`
    position: relative;
    ${({ target }) => getCssByTarget(target)};
    &::after {
        ${loaderStyles}
    }
`;
