import React, { FC, memo, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { getDimension } from './get-dimension';
import { MappedStrapiImages, StrNum } from './types';

const _Image: FC<ComponentProps> = (props) => {
    const { mobileFilename, desktopFilename, options, widthOnScreen } = props;

    const commonParams = {
        options,
        widthOnScreen
    };
    const optionComposedWithWebp = options
        ? `format_webp,${options}`
        : 'format_webp';

    const { mainSrcset, mainWebpSrcSet, defaultSrc } = useMemo(() => {
        const mainSrcset = createMainSrcset({
            filename: desktopFilename,
            ...commonParams
        });

        const mainWebpSrcSet = createMainSrcset({
            filename: desktopFilename,
            ...commonParams,
            options: optionComposedWithWebp
        });

        const defaultSrc = getDefaultSrc(desktopFilename, widthOnScreen);

        return { mainSrcset, mainWebpSrcSet, defaultSrc };
    }, [desktopFilename]);

    return (
        <>
            <picture>
                {mobileFilename && (
                    <>
                        <StyledImage
                            as="source"
                            type="image/webp"
                            media="(max-width: 768px)"
                            srcSet={createMobileSrcset({
                                filename: mobileFilename,
                                ...commonParams,
                                options: optionComposedWithWebp
                            })}
                            {...props}
                        />
                        <StyledImage
                            as="source"
                            media="(max-width: 768px)"
                            srcSet={createMobileSrcset({
                                filename: mobileFilename,
                                ...commonParams
                            })}
                            {...props}
                        />
                    </>
                )}

                <StyledImage
                    as="source"
                    type="image/webp"
                    srcSet={mainWebpSrcSet}
                    {...props}
                />
                <StyledImage src={defaultSrc} srcSet={mainSrcset} {...props} />
            </picture>
        </>
    );
};

export const Image = memo(_Image);

interface ComponentProps extends MappedStrapiImages {
    $height?: StrNum;
    $width?: StrNum;
    options?: string;
    widthOnScreen?: WidthOnScreen;
}

interface WidthOnScreen {
    mobile?: number;
    desktop: number;
}

const host = process.env.STRAPI_URL || 'http://localhost:1337';

interface CreateSrcsetParams {
    widthOnScreen?: WidthOnScreen;
    filename: string;
    options?: string;
}

const setupCreatingPoint = (options: string, filename: string) => {
    const formattedOptions = options ? `,${options}/` : '/';

    return (widthToCrop: number, widthInW: number) =>
        `${host}/uploads/w_${widthToCrop}${formattedOptions}${filename} ${widthInW}w`;
};

const createMainSrcset = ({
    filename,
    widthOnScreen,
    options
}: CreateSrcsetParams): string => {
    const { mobile, desktop } = widthOnScreen || {};
    const mobileWidthOnScreen = Math.round(mobile) | 768;
    const desktopWidthOnScreen = Math.round(desktop);

    const createPoint = setupCreatingPoint(options, filename);

    const getMobileSrcset = (): string => {
        return `${createPoint(mobileWidthOnScreen, 640)}, ${createPoint(
            mobileWidthOnScreen * 2,
            768
        )}`;
    };

    const getDesktopSrcset = (): string => {
        return `${createPoint(desktopWidthOnScreen, 1600)}, ${createPoint(
            desktopWidthOnScreen * 2,
            2560
        )}`;
    };

    const mobileSrcset = getMobileSrcset();
    const desktopSrcset = getDesktopSrcset();

    const srcSet = `${mobileSrcset}, ${desktopSrcset}`;
    return srcSet;
};

const createMobileSrcset = ({
    filename,
    options,
    widthOnScreen
}: CreateSrcsetParams) => {
    const { mobile } = widthOnScreen;
    const mobileWidthOnScreen = Math.round(mobile);

    const createPoint = setupCreatingPoint(options, filename);

    const getMobileSrcset = (): string => {
        return `${createPoint(mobileWidthOnScreen, 640)}, ${createPoint(
            mobileWidthOnScreen * 2,
            768
        )}`;
    };
    const srcset = getMobileSrcset();
    return srcset;
};

const getDefaultSrc = (
    filename: string,
    widthOnScreen: WidthOnScreen
): string => {
    const { desktop } = widthOnScreen;
    const desktopWidthOnScreen = Math.round(desktop);

    return `${host}/uploads/w_${desktopWidthOnScreen}/${filename}`;
};

interface StyledImageAndSourceProps {
    $height?: StrNum;
    $width?: StrNum;
}

const StyledImage = styled.img<StyledImageAndSourceProps>`
    ${({ $height, $width }) => css`
        height: ${getDimension($height)};
        width: ${getDimension($width)};
    `}
`;
