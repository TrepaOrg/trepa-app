import { useLaunchParams } from '@telegram-apps/sdk-react';
import WebApp from '@twa-dev/sdk';

export const Profile = () => {
    const lp = useLaunchParams();
    const user = lp.initData?.user;
    if (!user) return <h1>no user data</h1>;
    const { id, username, firstName, photoUrl } = user;

    return (
        <div>
            <span>photo: {WebApp.initDataUnsafe.user?.photo_url}</span>
            <span>photo: {photoUrl}</span>
            <img src={photoUrl} alt="profile image" />
            <span>id: {id}</span>
            <span>first_name: {firstName}</span>
            <span>username: {username}</span>
        </div>
    );
};
