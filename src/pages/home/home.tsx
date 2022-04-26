import { Collapsible } from '@lib';
import React, { useState } from 'react';

export const HomePage = () => {
    const [open, setOpen] = useState(false);

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
            <Collapsible
                open={open}
                $onClick={() => setOpen(!open)}
                VisiblePart={Title}
                Inner={Content}
            />
        </>
    );
};
