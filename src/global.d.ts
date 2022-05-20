declare const _ASSETS_PATH_: string;
declare const _DEV_: string;

declare module '*.svg' {
    const content: any;
    export default content;
}
declare module '*.png' {
    const content: any;
    export default content;
}
declare module '*.jpeg' {
    const content: any;
    export default content;
}
declare module '*.jpg' {
    const content: any;
    export default content;
}
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';

interface Window {}

declare module '*.json' {
    const value: any;
    export default value;
}
