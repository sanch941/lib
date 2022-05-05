import React, { FC, useEffect, useRef, useState } from 'react';

export const ClickOutside: FC<ComponentProps> = ({
    children,
    onClickOutside,
    ...props
}) => {
    const ref = useRef(null);
    const [isTouch, setIsTouch] = useState(false);

    const handle = (e) => {
        if (e.type === 'touchend') setIsTouch(true);
        if (e.type === 'click' && isTouch) return;

        const el = ref.current;
        if (el && !el.contains(e.target)) onClickOutside(e);
    };

    useEffect(() => {
        document.addEventListener('touchend', handle, true);
        document.addEventListener('click', handle, true);

        return () => {
            document.removeEventListener('touchend', handle, true);
            document.removeEventListener('click', handle, true);
        };
    }, []);

    return (
        <div {...props} ref={ref}>
            {children}
        </div>
    );
};

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    onClickOutside: (...props: unknown[]) => void;
}
