import { useAppDispatch, useAppSelector } from '@store';
import React, { useEffect } from 'react';
import { homeActions } from './model';

const { setHomePage } = homeActions;

export const HomePage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(setHomePage());
        }, 3000);
    }, []);

    const welcomeText = useAppSelector(
        ({ home: { welcomeText } }) => welcomeText
    );

    return <div> {welcomeText} </div>;
};
