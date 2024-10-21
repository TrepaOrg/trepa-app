import { useNavigate } from 'react-router-dom';
import { backButton } from '@telegram-apps/sdk-react';
import { PropsWithChildren, useEffect } from 'react';

export function Page({
    children,
    canGoBack = true,
    className,
}: PropsWithChildren<{
    canGoBack?: boolean;
    className?: string;
}>) {
    const navigate = useNavigate();

    useEffect(() => {
        if (canGoBack) {
            backButton.show();
            return backButton.onClick(() => {
                navigate(-1);
            });
        }
        backButton.hide();
    }, [canGoBack]);

    return <div className={className}>{children}</div>;
}
