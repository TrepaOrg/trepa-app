import styles from './Home.module.scss';
import { PollCard } from '@components/PollCard/PollCard';
import { mockPolls } from '../../mock/mockPolls';
import { Page } from '@components/telegram/Page';

export const Home = () => {
    return (
        <Page canGoBack={false} className={styles.root}>
            {mockPolls.map((mockPoll) => (
                <PollCard {...mockPoll} key={mockPoll.id} />
            ))}
        </Page>
    );
};
