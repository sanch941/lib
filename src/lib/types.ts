import React from 'react';

export type StrNum = string | number;

export type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HtmlDiv = React.HTMLAttributes<HTMLDivElement>;
export type HtmlInput = React.InputHTMLAttributes<HTMLInputElement>;
export type HtmlImg = React.ImgHTMLAttributes<HTMLImageElement>;

export interface MappedStrapiImages {
    mobileFilename?: string;
    desktopFilename: string;
}
