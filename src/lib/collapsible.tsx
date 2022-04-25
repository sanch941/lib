import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';

export const Collapsible: FC<ComponentProps> = ({ VisiblePart, Inner }) => {
    const contentRef = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <StyledTitle onClick={() => setOpen(!open)}>
                <VisiblePart />
            </StyledTitle>

            <StyledContent
                scrollHeight={contentRef.current?.scrollHeight}
                open={open}
                ref={contentRef}
            >
                <Inner />
            </StyledContent>
        </div>
    );
};

interface ComponentProps {
    VisiblePart: FC;
    Inner: FC;
}

const StyledTitle = styled.div`
    cursor: pointer;
`;

interface StyledContentProps {
    open: boolean;
    scrollHeight: number;
}

const StyledContent = styled.div<StyledContentProps>`
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    max-height: ${({ scrollHeight, open }) => (open ? `${scrollHeight}px` : 0)};
`;
