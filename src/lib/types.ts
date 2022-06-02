import React from 'react';

export type StrNum = string | number;

export type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HtmlDiv = React.HTMLAttributes<HTMLDivElement>;
export type HtmlInput = React.InputHTMLAttributes<HTMLInputElement>;
export type HtmlImg = React.ImgHTMLAttributes<HTMLImageElement>;

export interface MappedStrapiImage {
    mobileFilename?: string;
    commonFilename: string;
}

export interface StrapiImageQueryFromRes {
    id: number;
    attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: {
            thumbnail: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string;
                width: number;
                height: number;
                size: number;
                url: string;
            };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string;
        provider: string;
        provider_metadata: string;
        createdAt: Date;
        updatedAt: Date;
    };
}

export interface StrapiImageFromRes {
    id: number;
    mobile: {
        data: StrapiImageQueryFromRes;
    };
    common: {
        data: StrapiImageQueryFromRes;
    };
}

export interface StrapiListItemFromRes {
    id?: number;
    name?: string;
    img?: StrapiImageFromRes;
    description?: string;
    my_id?: number;
    related_id?: number;
}

export interface MappedStrapiListItem {
    id?: number;
    name?: string;
    img?: MappedStrapiImage;
    description?: string;
    my_id?: number;
    related_id?: number;
}

export interface StrapiButton {
    id?: number;
    name?: string;
}

export interface StrapiResponsiveRichTextEditor {
    common: string;
    mobile?: string;
}
