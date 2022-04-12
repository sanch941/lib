import { pxRem } from './px-rem';
import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';

export const Text = styled.p<Props>`
    ${({ fz, lh, $color, fw, $width, ta }) => css`
        font-size: ${fz ? getDimension(fz) : pxRem(16)};
        line-height: ${Boolean(lh) && getDimension(lh)};
        color: ${$color};
        font-weight: ${fw};
        width: ${Boolean($width) && getDimension($width)};
        text-align: ${ta};
    `}
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
