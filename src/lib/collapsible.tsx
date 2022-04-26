import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';

export const Collapsible: FC<ComponentProps> = ({
    VisiblePart,
    Inner,
    open,
    $onClick
}) => {
    const contentRef = useRef(null);
    const [openLocal, setOpenLocal] = useState(false);

    const onClick = () => ($onClick ? $onClick() : setOpenLocal(!openLocal));

    return (
        <div>
            <StyledTitle onClick={onClick}>
                <VisiblePart />
            </StyledTitle>

            <StyledContent
                scrollHeight={contentRef.current?.scrollHeight}
                open={open !== undefined ? open : openLocal}
                ref={contentRef}
            >
                <Inner />
            </StyledContent>
        </div>
    );
};

type ComponentProps =
    | {
          VisiblePart: FC;
          Inner: FC;
          $onClick?: never;
          open?: never;
      }
    | {
          VisiblePart: FC;
          Inner: FC;
          $onClick: () => void;
          open: boolean;
      };

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
