import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.scss';

// Mock the environment in case, we are outside Telegram.
import './mockEnv.ts';
import WebApp from '@twa-dev/sdk';
import { Root } from '@components/telegram/Root';
import { init } from './init';
import { EnvUnsupported } from '@components/telegram/EnvUnsupported';

WebApp.ready();

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
    // Configure all application dependencies.
    // init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);
    init(true);

    root.render(
        <StrictMode>
            <Root />
        </StrictMode>,
    );
} catch (e) {
    root.render(<EnvUnsupported />);
}
