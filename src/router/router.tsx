import type { ComponentType, JSX } from 'react';
import Home from '@views/Home';
import { createHashRouter } from 'react-router-dom';
import DefaultLayout from '@layouts/DefaultLayout';
import NotFound from '@views/NotFound';
import Poll from '@views/Poll';
import Profile from '@components/Profile';
import Polls from '@views/Polls';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: '/', Component: Home },
    { path: '/search', Component: () => <h1>search</h1> },
    { path: '/poll', Component: Poll },
    { path: '/polls', Component: Polls },
    { path: '/profile', Component: Profile },
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
