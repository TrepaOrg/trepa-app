import { supabase } from '@api/supabase';
import { useEffect, useState } from 'react';
import { Poll } from '@api/database.types';

export const Polls = () => {
    const [polls, setPolls] = useState<Poll[]>([]);

    useEffect(() => {
        getPolls();
    }, []);

    async function getPolls() {
        const { data } = await supabase.from('Poll').select();

        if (data) {
            setPolls(data);
        }
    }

    return (
        <div>
            {polls.length === 0 && <span>no poll</span>}
            {polls.map((poll) => (
                <div key={poll.id}>
                    <span>{poll.id}</span>
                    <span>{poll.created_at}</span>
                    <span>{poll.expired_at}</span>
                    <span>{poll.option_1}</span>
                    <span>{poll.option_2}</span>
                    <span>{poll.title}</span>
                </div>
            ))}
        </div>
    );
};
