import styles from './Home.module.scss';
import { PollCard } from '@components/PollCard/PollCard';
import { mockPolls } from '../../mock/mockPolls';

export const Home = () => {
    return (
        <div className={styles.root}>
            {mockPolls.map((mockPoll) => (
                <PollCard {...mockPoll} key={mockPoll.id} />
            ))}
        </div>
    );
};
