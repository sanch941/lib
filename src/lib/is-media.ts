import styled from 'styled-components';
import { media } from './media';

export const IsMobile = styled.div`
    ${media.sm} {
        display: none;
    }
`;

export const IsDesktop = styled.div<{ $display?: string }>`
    display: none;

    ${media.sm} {
        display: ${({ $display = 'block' }) => $display};
    }
`;
