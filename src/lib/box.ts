import { pxRem } from './px-rem';
import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';

export const Box = styled.div<ComponentProps>`
    ${({ $top, $bottom, $left, $right }) =>
        getMargin({ $top, $bottom, $left, $right })};
    display: ${({ $flex }) => $flex && 'flex'};
    justify-content: ${({ jc }) => jc};
    align-items: ${({ ai }) => ai};
    width: ${({ $width }) => getDimension($width)};
    position: relative;
    fxw: ${({ $fxw }) => $fxw};
`;

interface MarginProps {
    $top?: number;
    $left?: number;
    $right?: number;
    $bottom?: number;
    $margin?: string;
    $fxw?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

interface ComponentProps extends MarginProps {
    $flex?: boolean;
    jc?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    ai?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    $width?: string | number;
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
