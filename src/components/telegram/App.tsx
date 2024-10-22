import { miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router/router';
import { useEffect } from 'react'; // Импортируем useEffect
import WebApp from '@twa-dev/sdk';

export function App() {
    const lp = useLaunchParams();
    const isDark = useSignal(miniApp.isDark);

    useEffect(() => {
        if (isDark) {
            WebApp.setHeaderColor('#343437');
            document.documentElement.style.setProperty('--background-color', '#151418');
            document.documentElement.style.setProperty('--foreground-color', '#ededed');
        } else {
            WebApp.setHeaderColor('#ededed');
            document.documentElement.style.setProperty('--background-color', '#f5f5f5');
            document.documentElement.style.setProperty('--foreground-color', '#020308');
        }
    }, [isDark]);

    WebApp.enableClosingConfirmation();
    WebApp.expand();

    return (
        <AppRoot
            // appearance={isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
            <RouterProvider router={router} />
        </AppRoot>
    );
}
