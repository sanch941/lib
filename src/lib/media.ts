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
    xs: 320,
    sm: 768,
    lg: 1170
};

export const media = {
    xs: createBreakpoint('min-width', sizes.xs),
    sm: createBreakpoint('min-width', sizes.sm),
    lg: createBreakpoint('min-width', sizes.lg)
};
