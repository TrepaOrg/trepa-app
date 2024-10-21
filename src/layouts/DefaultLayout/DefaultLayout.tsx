import { Outlet } from 'react-router-dom';
import BottomNavigation from '@components/BottomNavigation';

export const DefaultLayout = () => {
    return (
        <div>
            <Outlet />
            <BottomNavigation />
        </div>
    );
};
