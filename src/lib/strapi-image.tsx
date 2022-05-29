import React, { FC, memo, useMemo } from 'react';
import { MappedStrapiImage } from './types';

const _StrapiImage: FC<ComponentProps> = (props) => {
    const { mobileFilename, commonFilename, options, widthOnScreen } = props;

    const commonParams = {
        options,
        widthOnScreen
    };
    const optionComposedWithWebp = options
        ? `format_webp,${options}`
        : 'format_webp';

    const { mainSrcset, mainWebpSrcSet, defaultSrc } = useMemo(() => {
        const mainSrcset = createMainSrcset({
            filename: commonFilename,
            ...commonParams
        });

        const mainWebpSrcSet = createMainSrcset({
            filename: commonFilename,
            ...commonParams,
            options: optionComposedWithWebp
        });

        const defaultSrc = getDefaultSrc(commonFilename, widthOnScreen);

        return { mainSrcset, mainWebpSrcSet, defaultSrc };
    }, [commonFilename]);

    return (
        <>
            <picture>
                {mobileFilename && (
                    <>
                        <source
                            type="image/webp"
                            media="(max-width: 768px)"
                            srcSet={createMobileSrcset({
                                filename: mobileFilename,
                                ...commonParams,
                                options: optionComposedWithWebp
                            })}
                            {...props}
                        />
                        <source
                            media="(max-width: 768px)"
                            srcSet={createMobileSrcset({
                                filename: mobileFilename,
                                ...commonParams
                            })}
                            {...props}
                        />
                    </>
                )}

                <source type="image/webp" srcSet={mainWebpSrcSet} {...props} />
                <img src={defaultSrc} srcSet={mainSrcset} {...props} />
            </picture>
        </>
    );
};

export const StrapiImage = memo(_StrapiImage);

interface ComponentProps extends MappedStrapiImage {
    options?: string;
    widthOnScreen?: WidthOnScreen;
}

interface WidthOnScreen {
    mobile?: number;
    common: number;
}

declare global {
    interface Window {
        _STRAPI_URL_: string;
    }
}

window._STRAPI_URL_ = window._STRAPI_URL_ || 'http://localhost:1337';

const host = window._STRAPI_URL_;

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
    const { mobile, common } = widthOnScreen || {};
    const mobileWidthOnScreen = Math.round(mobile) | 768;
    const commonWidthOnScreen = Math.round(common);

    const createPoint = setupCreatingPoint(options, filename);

    const getMobileSrcset = (): string => {
        return `${createPoint(mobileWidthOnScreen, 640)}, ${createPoint(
            mobileWidthOnScreen * 2,
            768
        )}`;
    };

    const getDesktopSrcset = (): string => {
        return `${createPoint(commonWidthOnScreen, 1600)}, ${createPoint(
            commonWidthOnScreen * 2,
            2560
        )}`;
    };

    const mobileSrcset = getMobileSrcset();
    const commonSrcset = getDesktopSrcset();

    const srcSet = `${mobileSrcset}, ${commonSrcset}`;
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
    const { common } = widthOnScreen;
    const commonWidthOnScreen = Math.round(common);

    return `${host}/uploads/w_${commonWidthOnScreen}/${filename}`;
};
