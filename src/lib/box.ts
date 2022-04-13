import { pxRem } from './px-rem';
import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';

export const Box = styled.div<ComponentProps>`
    ${({ $top, $bottom, $left, $right }) =>
        getMargin({ $top, $bottom, $left, $right })};

    ${({ $flex, jc, ai, $width, $height, fxw, fxd, bg }) => css`
        display: ${$flex && 'flex'};
        justify-content: ${jc};
        align-items: ${ai};
        width: ${getDimension($width)};
        height: ${getDimension($height)};
        position: relative;
        flex-wrap: ${fxw};
        background: ${bg};
        flex-direction: ${fxd};
    `}
`;

interface MarginProps {
    $top?: number;
    $left?: number;
    $right?: number;
    $bottom?: number;
    $margin?: string;
}

interface ComponentProps extends MarginProps {
    $flex?: boolean;
    jc?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    ai?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    $width?: string | number;
    fxw?: 'nowrap' | 'wrap' | 'wrap-reverse';
    $height?: string | number;
    bg?: string;
    fxd?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}
export type BoxProps = ComponentProps;

const getMargin = ({ $top, $left, $right, $bottom, $margin }: MarginProps) => {
    return $margin
        ? css`
              margin: ${$margin};
          `
        : css`
              margin-top: ${$top && pxRem($top)};
              margin-left: ${$left && pxRem($left)};
              margin-right: ${$right && pxRem($right)};
              margin-bottom: ${$bottom && pxRem($bottom)};
          `;
};
