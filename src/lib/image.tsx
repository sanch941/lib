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
                    srcSet={mobileWebpUrl}
                    type="image/webp"
                    media="(max-width: 768px)"
                    {...props}
                />
            )}
            {mobileUrl && (
                <source
                    srcSet={mobileUrl}
                    media="(max-width: 768px)"
                    {...props}
                />
            )}

            {commonWebpUrl && (
                <source srcSet={commonWebpUrl} type="image/webp" {...props} />
            )}
            <img
                src={priority === 'common' ? commonUrl : mobileUrl}
                alt=""
                {...props}
            />
        </picture>
    );
};

interface ComponentProps {
    commonUrl: string;
    mobileUrl?: string;
    commonWebpUrl?: string;
    mobileWebpUrl?: string;
    priority?: 'common' | 'mobile';
}
