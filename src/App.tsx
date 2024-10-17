import styles from './App.module.scss';
import { FC } from 'react';

type AppProps = {
    onClick?: () => void;
};

export const App: FC<AppProps> = (props) => {
    const { onClick } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Telegram Theme Variables</h1>

            <button className={styles.button} onClick={onClick}>
                Show Alert
            </button>
        </div>
    );
};
