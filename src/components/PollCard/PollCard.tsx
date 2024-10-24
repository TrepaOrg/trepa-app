import { FC } from 'react';
import styles from './PollCard.module.scss';
import { Poll } from '@domains/poll';
import Icon from '@components/Icon';
import { formatNumberWithDelimiter } from '@utils/number';
import { formatMilliseconds } from '@utils/time';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

type PollCardProps = Poll & {
    className?: string;
    onClick?: () => void;
};

export const PollCard: FC<PollCardProps> = (props) => {
    const { id, title, usersCount, amount, timeLeft, imgUrl, className, onClick } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        onClick?.();
        navigate('/poll');
    };

    return (
        <div className={clsx(styles.root, className)}>
            <img className={styles.image} src={imgUrl} alt={`Poll ${id}`} />
            <div className={styles.main}>
                <span className={styles.title}>{title}</span>
                <div className={styles.paramsContainer}>
                    <div className={styles.paramsTop}>
                        <div className={styles.usersCountContainer}>
                            <Icon name="users" className={styles.icon} />
                            <span>{formatNumberWithDelimiter(usersCount)}</span>
                        </div>
                        <div className={styles.amountContainer}>
                            <Icon name="amount" className={styles.icon} />
                            <span>${formatNumberWithDelimiter(amount)}</span>
                        </div>
                    </div>
                    <div className={styles.timeLeftContainer}>
                        <span>{formatMilliseconds(timeLeft)}</span>
                    </div>
                </div>
                <button onClick={handleClick} className={styles.pickButton}>
                    PICK MAJORITY
                </button>
            </div>
        </div>
    );
};
