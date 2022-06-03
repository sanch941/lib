import React, { FC } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { getDimension } from './get-dimension';
import { media } from './media';
import { StrNum } from './types';

export const FlexWrapContainer: FC<ComponentProps> = (props) => {
    return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

interface Props {
    gap: StrNum;
}

interface ComponentProps extends Props {
    sm?: Props;
}

const StyledContainer = styled.div<ComponentProps>`
    display: inline-flex;
    flex-wrap: wrap;

    ${({ gap }) => setGap(gap)};

    ${media.md} {
        ${({ sm }) => setGap(sm?.gap)};
    }
`;

const setGap = (gap: StrNum): FlattenSimpleInterpolation => {
    const unit = getDimension(gap);

    return css`
        margin: -${unit} 0 0 -${unit};
        width: calc(100% + ${unit});
    `;
};
