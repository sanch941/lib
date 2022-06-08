import { HomePage } from '@pages/home';
import { ImagePage } from '@pages/image';
import { StrapiImagePage } from '@pages/strapi-image';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Ленивые компоненты

export const Router = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                <Route path="/strapi-image" component={StrapiImagePage} />
                <Route path="/image" component={ImagePage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Suspense>
    );
};
