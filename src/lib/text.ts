import { pxRem } from './px-rem';
import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';
import { media } from './media';

export const Text = styled.p<ComponentProps>`
    ${(props) => getStyles(props)};

    ${media.sm} {
        ${({ sm }) => getStyles(sm)};
    }
`;

interface Props {
    // font-size
    fz?: number | string;
    // line-height
    lh?: number | string;
    $color?: string;
    // font-weight
    fw?: number;
    $width?: number | string;
    ta?: string;
}
export type TextProps = Props;

interface ComponentProps extends Props {
    sm?: Props;
}

const getStyles = ({ fz, lh, $color, fw, $width, ta }: Props) => css`
    font-size: ${fz ? getDimension(fz) : pxRem(16)};
    line-height: ${Boolean(lh) && getDimension(lh)};
    color: ${$color};
    font-weight: ${fw};
    width: ${Boolean($width) && getDimension($width)};
    text-align: ${ta};
`;
