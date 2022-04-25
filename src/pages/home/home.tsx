import { Collapsible } from '@lib';
import React from 'react';

export const HomePage = () => {
    const Title = () => <div>title</div>;

    const Content = () => (
        <>
            <div>content</div>
            <div>content</div>
            <div>content</div>
            <div>content</div>
            <div>content</div>
            <div>content</div>
            <div>content</div>
            <div>content</div>
        </>
    );

    return (
        <>
            <Collapsible VisiblePart={Title} Inner={Content} />
        </>
    );
};
