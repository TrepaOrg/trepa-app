import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNavigation.module.scss';
import { clsx } from 'clsx';

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
    return (
        <nav className={styles.root}>
            {tabs.map((tab) => (
                <NavLink
                    key={tab.path}
                    to={tab.path}
                    className={({ isActive }) => clsx(styles.tab, { [styles.isActive]: isActive })}
                >
                    <span className={styles.icon}>{tab.icon}</span>
                    <span className={styles.label}>{tab.name}</span>
                </NavLink>
            ))}
        </nav>
    );
};
