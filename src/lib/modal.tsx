import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Portal } from './portal';

export const Modal: FC<ComponentProps> = ({
    children,
    open,
    onOverlayClick = () => ({})
}) => {
    return (
        <Portal>
            {open && (
                <StyledContainer>
                    {children} <StyledOverlay onClick={onOverlayClick} />
                </StyledContainer>
            )}
        </Portal>
    );
};

interface ComponentProps {
    open: boolean;
    onOverlayClick?: () => void;
}

const breatheAnimation = keyframes`
    0% { opacity:0; }
    100% {  opacity: 1; }
`;

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: opacity 500ms;
    z-index: 20;
    height: 100%;
    width: 100%;
    &:target {
        visibility: visible;
        opacity: 1;
    }
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
`;

const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
