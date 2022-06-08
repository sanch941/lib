import React, { FC } from 'react';

export const Image: FC<ComponentProps> = ({
    commonUrl,
    commonWebpUrl,
    mobileUrl,
    mobileWebpUrl,
    priority = 'common',
    ...props
}) => {
    return (
        <picture>
            {mobileWebpUrl && (
                <source
                    srcSet={getSrcSet(mobileWebpUrl)}
                    type="image/webp"
                    media="(max-width: 768px)"
                    {...props}
                />
            )}
            {mobileUrl && (
                <source
                    srcSet={getSrcSet(mobileUrl)}
                    media="(max-width: 768px)"
                    {...props}
                />
            )}

            {commonWebpUrl && (
                <source
                    srcSet={getSrcSet(commonWebpUrl)}
                    type="image/webp"
                    {...props}
                />
            )}
            <img
                src={priority === 'common' ? commonUrl['1x'] : mobileUrl['1x']}
                alt=""
                {...props}
            />
        </picture>
    );
};

interface Resolutions {
    '1x': string;
    '2x'?: string;
}

interface ComponentProps {
    commonUrl: Resolutions;
    mobileUrl?: Resolutions;
    commonWebpUrl?: Resolutions;
    mobileWebpUrl?: Resolutions;
    priority?: 'common' | 'mobile';
}

const getSrcSet = (resolutions: Resolutions): string => {
    const resolutionsList: string[] = Object.keys(resolutions).map(
        (key) => `${resolutions[key]} ${key}`
    );
    const srcSet = resolutionsList.join(', ');
    return srcSet;
};
