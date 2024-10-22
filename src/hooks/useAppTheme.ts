import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export const useAppTheme = (isDark: boolean) => {
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
};
