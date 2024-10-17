import styles from './App.module.scss';
import { FC } from 'react';

type AppProps = {
    onClick?: () => void;
};

export const App: FC<AppProps> = (props) => {
    const { onClick } = props;
    return (
        <div>
            <h1 className={styles.title}>title</h1>
            <button className={styles.button} onClick={onClick}>
                Show Alert
            </button>
        </div>
    );
};
