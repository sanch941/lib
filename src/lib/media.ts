const createBreakpoint = (
    direction: 'max-width' | 'min-width',
    width: number | string
) => {
    const setupWidth = (width: number | string): string => {
        return typeof width == 'number' ? `${width}px` : width;
    };

    return `@media (${direction}: ${setupWidth(width)})`;
};

const sizes = {
    xs: 0,
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
