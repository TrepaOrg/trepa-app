import React from 'react';
import styles from './BottomNavigation.module.scss';
import { Link } from '@components/telegram/Link';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

type Tab = {
    name: string;
    path: string;
    icon: React.ComponentType;
};

const tabs = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Search', path: '/search', icon: '🔍' },
    { name: 'Favorites', path: '/favorites', icon: '❤️' },
    { name: 'Notifications', path: '/notifications', icon: '🔔' },
    { name: 'Profile', path: '/profile', icon: '👤' },
];

export const BottomNavigation = () => {
    const location = useLocation();
    return (
        <nav className={styles.root}>
            {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                    <Link key={tab.path} to={tab.path} className={clsx(styles.tab, isActive && styles.isActive)}>
                        <span className={styles.icon}>{tab.icon}</span>
                        <span className={styles.label}>{tab.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
};
