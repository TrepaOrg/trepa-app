import styles from './App.module.scss';
import { FC } from 'react';

type AppProps = {
    onClick?: () => void;
};

export const App: FC<AppProps> = (props) => {
    const { onClick } = props;
    return (
        <h1 className={styles.title}>
            <button onClick={onClick}>Show Alert</button>
        </h1>
    );
};
