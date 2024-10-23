import WebApp from '@twa-dev/sdk';

export const Profile = () => {
    const user = WebApp.initDataUnsafe.user;
    if (!user) return <h1>no user data</h1>;
    const { id, first_name, last_name, photo_url, username } = user;
    return (
        <div>
            <img src={photo_url} alt="profile image" />
            <span>id: {id}</span>
            <span>first_name: {first_name}</span>
            <span>last_name: {last_name}</span>
            <span>username: {username}</span>
        </div>
    );
};
