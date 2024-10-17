import { Outlet } from 'react-router-dom';
import BottomNavigation from '@components/BottomNavigation';

export const DefaultLayout = () => {
    return (
        <div>
            <h1>default layout</h1>
            <Outlet />
            <BottomNavigation />
        </div>
    );
};
