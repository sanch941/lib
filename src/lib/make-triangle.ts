import { css, FlattenSimpleInterpolation } from 'styled-components';

export const makeTriangle = (triangleStyles: FlattenSimpleInterpolation) => css`
    &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;

        ${triangleStyles};
    }
`;
