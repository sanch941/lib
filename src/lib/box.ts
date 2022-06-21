import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';
import { generateMediaProps, MediaSizes } from './media';
import { StrNum } from './types';

export const Box = styled.div<ComponentProps>`
    position: relative;
    ${(props) => getStyles(props)};
    ${(props) => generateMediaProps(props, getStyles)}
`;

Box.displayName = 'Box';

interface Props {
    $top?: StrNum;
    $left?: StrNum;
    $right?: StrNum;
    $bottom?: StrNum;
    pTop?: StrNum;
    pBottom?: StrNum;
    pLeft?: StrNum;
    pRight?: StrNum;
    $margin?: string;
    padding?: string;
    $flex?: boolean;
    jc?:
        | 'flex-start'
        | 'center'
        | 'space-between'
        | 'flex-end'
        | 'stretch'
        | 'space-around';
    ai?:
        | 'flex-start'
        | 'center'
        | 'space-between'
        | 'flex-end'
        | 'stretch'
        | 'space-around';
    $width?: StrNum;
    fxw?: 'nowrap' | 'wrap' | 'wrap-reverse';
    $height?: StrNum;
    bg?: string;
    fxd?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    mih?: StrNum;
    mah?: StrNum;
    bdrs?: string;
    bd?: string;
}

interface ComponentProps extends Props, MediaSizes<Props> {
    sm?: Props;
}

export type BoxProps = ComponentProps;

const getMargin = ({
    $top,
    $left,
    $right,
    $bottom,
    $margin,
    pTop,
    pBottom,
    pLeft,
    pRight,
    padding
}: Props) => css`
    margin-top: ${getDimension($top)};
    margin-left: ${getDimension($left)};
    margin-right: ${getDimension($right)};
    margin-bottom: ${getDimension($bottom)};
    padding-top: ${getDimension(pTop)};
    padding-left: ${getDimension(pLeft)};
    padding-right: ${getDimension(pRight)};
    padding-bottom: ${getDimension(pBottom)};
    margin: ${$margin};
    padding: ${padding};
`;

const getStyles = (props: ComponentProps = {}) => {
    const {
        $flex,
        jc,
        ai,
        $width,
        $height,
        fxw,
        fxd,
        bg,
        mih,
        mah,
        bdrs,
        bd
    } = props;

    return css`
        display: ${$flex && 'flex'};
        justify-content: ${jc};
        align-items: ${ai};
        width: ${getDimension($width)};
        height: ${getDimension($height)};
        flex-wrap: ${fxw};
        background: ${bg};
        flex-direction: ${fxd};
        min-height: ${getDimension(mih)};
        max-height: ${getDimension(mah)};
        border-radius: ${bdrs};
        border: ${bd};

        ${getMargin(props)}
    `;
};
