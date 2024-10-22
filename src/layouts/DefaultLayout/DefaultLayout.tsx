import { Outlet } from 'react-router-dom';
import BottomNavigation from '@components/BottomNavigation';
import styles from './DefaultLayout.module.scss';
import { Header } from '@components/Header/Header';

export const DefaultLayout = () => {
    return (
        <div className={styles.root}>
            <Header />
            <Outlet />
            <BottomNavigation />
        </div>
    );
};
