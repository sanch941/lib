import { css, FlattenSimpleInterpolation } from 'styled-components';

const createBreakpoint = (
    direction: 'max-width' | 'min-width',
    width: number | string
) => {
    const setupWidth = (width: number | string): string => {
        return typeof width == 'number' ? `${width}px` : width;
    };

    return `@media (${direction}: ${setupWidth(width)})`;
};

type SizeNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Sizes = {
    [key in SizeNames]: number;
};

const sizes: Sizes = {
    xs: 375,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
};

export const media = {
    xs: createBreakpoint('max-width', sizes.sm),
    sm: createBreakpoint('min-width', sizes.sm),
    md: createBreakpoint('min-width', sizes.md),
    lg: createBreakpoint('min-width', sizes.lg),
    xl: createBreakpoint('min-width', sizes.xl),
    xxl: createBreakpoint('min-width', sizes.xxl)
};

export type MediaSizes<T> = {
    [key in SizeNames]?: T;
};

type GenerateMediaProps = (
    props: {
        [key in string]?: any;
    },
    getPropsFunc: (params: unknown) => FlattenSimpleInterpolation
) => FlattenSimpleInterpolation;

export const generateMediaProps: GenerateMediaProps = (props, getPropsFunc) => {
    let result = css``;

    Object.keys(sizes).forEach((key) => {
        result = css`
            ${result};

            ${media[key]} {
                ${getPropsFunc(props[key])}
            }
        `;
    });

    return result;
};
