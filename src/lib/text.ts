import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';
import { generateMediaProps, MediaSizes } from './media';

const getStyles = ({ fz, lh, $color, fw, $width, ta, whs }: Props = {}) => css`
    font-size: ${getDimension(fz)};
    line-height: ${getDimension(lh)};
    color: ${$color};
    font-weight: ${fw};
    width: ${getDimension($width)};
    text-align: ${ta};
    white-space: ${whs};
`;

export const Text = styled.p<ComponentProps>`
    ${(props) => getStyles(props)};
    ${(props) => generateMediaProps(props, getStyles)}
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
    whs?: string;
}
export type TextProps = Props;

interface ComponentProps extends Props, MediaSizes<Props> {}
