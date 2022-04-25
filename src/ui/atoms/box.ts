import styled, { css } from 'styled-components';

export const Box = styled.div<ComponentProps>`
    ${({ $top, $bottom, $left, $right }) =>
        getMargin({ $top, $bottom, $left, $right })};
`;

interface MarginProps {
    $top?: number;
    $left?: number;
    $right?: number;
    $bottom?: number;
    $margin?: string;
}

interface ComponentProps extends MarginProps {}

const getMargin = ({
    $top = 0,
    $left = 0,
    $right = 0,
    $bottom = 0,
    $margin
}: MarginProps) => {
    return $margin
        ? css`
              margin: ${$margin};
          `
        : css``;
};
