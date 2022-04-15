import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';
import { media } from './media';

export const Box = styled.div<ComponentProps>`
    ${({ $top, $bottom, $left, $right }) =>
        getMargin({ $top, $bottom, $left, $right })};

    ${(props) => getStyles(props)};

    ${media.sm} {
        ${({ sm }) => getStyles(sm)};
    }
`;

interface MarginProps {
    $top?: number | string;
    $left?: number | string;
    $right?: number | string;
    $bottom?: number | string;
    $margin?: string | string;
}

interface Props extends MarginProps {
    $flex?: boolean;
    jc?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    ai?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    $width?: string | number;
    fxw?: 'nowrap' | 'wrap' | 'wrap-reverse';
    $height?: string | number;
    bg?: string;
    fxd?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

interface ComponentProps extends Props {
    sm?: Props;
}

export type BoxProps = ComponentProps;

const getMargin = ({ $top, $left, $right, $bottom, $margin }: MarginProps) => {
    return $margin
        ? css`
              margin: ${$margin};
          `
        : css`
              margin-top: ${getDimension($top)};
              margin-left: ${getDimension($left)};
              margin-right: ${getDimension($right)};
              margin-bottom: ${getDimension($bottom)};
          `;
};

const getStyles = ({
    $flex,
    jc,
    ai,
    $width,
    $height,
    fxw,
    fxd,
    bg
}: ComponentProps = {}) => css`
    display: ${$flex && 'flex'};
    justify-content: ${jc};
    align-items: ${ai};
    width: ${getDimension($width)};
    height: ${getDimension($height)};
    position: relative;
    flex-wrap: ${fxw};
    background: ${bg};
    flex-direction: ${fxd};
`;
