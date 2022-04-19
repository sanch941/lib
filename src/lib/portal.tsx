import { useEffect, useState, FC } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');
export const Portal: FC<ComponentProps> = ({ children, el = 'div' }) => {
    const [container] = useState(() => {
        // This will be executed only on the initial render
        // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
        return document.createElement(el);
    });

    useEffect(() => {
        modalRoot.appendChild(container);
        return () => {
            modalRoot.removeChild(container);
        };
    }, []);

    return createPortal(children, container);
};

interface ComponentProps {
    el?: string;
}
