import { Outlet } from 'react-router-dom';
import BottomNavigation from '@components/BottomNavigation';
import styles from './DefaultLayout.module.scss';

export const DefaultLayout = () => {
    return (
        <div className={styles.root}>
            <Outlet />
            <BottomNavigation />
        </div>
    );
};
