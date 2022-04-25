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

const getStyles = ({ fz, lh, $color, fw, $width, ta }: Props = {}) => css`
    font-size: ${getDimension(fz)};
    line-height: ${getDimension(lh)};
    color: ${$color};
    font-weight: ${fw};
    width: ${getDimension($width)};
    text-align: ${ta};
`;
