import React from 'react';
import styles from './Header.module.scss';
import Icon from '@components/Icon';
import { formatNumberWithDelimiter } from '@utils/number';

export const Header = () => {
    return (
        <div className={styles.root}>
            <span className={styles.title}>Popular pools</span>
            <div className={styles.right}>
                <div className={styles.params}>
                    <div className={styles.shareContainer}>
                        <Icon name="profile" className={styles.icon} />
                        <span>25%</span>
                    </div>
                    <div className={styles.pointsContainer}>
                        <Icon name="points" className={styles.icon} />
                        <span>{formatNumberWithDelimiter(1525)}</span>
                    </div>
                </div>
                <button>
                    <Icon className={styles.searchIcon} name="search" />
                </button>
            </div>
        </div>
    );
};
