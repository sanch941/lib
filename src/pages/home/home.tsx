import { Box, Collapsible, pxRem, Text } from '../../lib';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

export const HomePage: FC<ComponentProps> = () => {
    const title = 'title';
    const description =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur numquam reiciendis dicta ipsa soluta obcaecati saepe, consectetur eos tempora odit! Quae sint facere fugit error consequatur natus quis? Consequuntur.';

    const [open, setOpen] = useState(false);

    const onClick = () => setOpen(!open);

    return (
        <Collapsible
            open={open}
            $onClick={onClick}
            VisiblePart={<VisiblePart title={title} open={open} />}
            Inner={<Inner description={description} />}
        />
    );
};

const VisiblePart = ({ title, open }) => (
    <StyledContainer $height={44} $flex ai="center" jc="space-between">
        <Text fz={14}> {title} </Text>
        <StyledIcon open={open} />
    </StyledContainer>
);

const Inner = ({ description }) => (
    <StyledInner bg="#FAFAFA" $width="100%">
        <Text fz={14} lh={16}>
            {description}
        </Text>
    </StyledInner>
);

interface ComponentProps {
    title: string;
    description: string;
}

const StyledContainer = styled(Box)`
    border-bottom: 1px solid #e0e0e0;
    padding: 0 ${pxRem(20)} 0 ${pxRem(13)};
`;

const StyledIcon = styled.div<{ open: boolean }>`
    transition: transform 0.8s ease-in-out;
    height: ${pxRem(10)};
    background-color: red;
    width: ${pxRem(15)};
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;

const StyledInner = styled(Box)`
    padding: ${pxRem(15)} ${pxRem(23)};
`;
