import { miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';

export function App() {
    const lp = useLaunchParams();
    const isDark = useSignal(miniApp.isDark);

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
            <RouterProvider router={router} />
        </AppRoot>
    );
}
