import type { ComponentType, JSX } from 'react';
import Home from '@views/Home';
import { createHashRouter } from 'react-router-dom';
import DefaultLayout from '@layouts/DefaultLayout';
import NotFound from '@views/NotFound';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: '/', Component: Home },
    { path: '/search', Component: () => <h1>search</h1> },
];

export const router = createHashRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            ...routes.map((route) => ({
                path: route.path,
                element: <route.Component />,
            })),
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);