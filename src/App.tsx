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

            <div className={styles.demoItem} style={{ backgroundColor: 'var(--tg-theme-bg-color)' }}>
                Background Color (bg_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-text-color)' }}>
                Main Text Color (text_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-hint-color)' }}>
                Hint Text Color (hint_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-link-color)' }}>
                Link Color (link_color)
            </div>

            <div
                className={styles.demoItem}
                style={{ backgroundColor: 'var(--tg-theme-button-color)', color: 'var(--tg-theme-button-text-color)' }}
            >
                Button Color & Text Color (button_color, button_text_color)
            </div>

            <div className={styles.demoItem} style={{ backgroundColor: 'var(--tg-theme-secondary-bg-color)' }}>
                Secondary Background Color (secondary_bg_color)
            </div>

            <div className={styles.demoItem} style={{ backgroundColor: 'var(--tg-theme-header-bg-color)' }}>
                Header Background Color (header_bg_color)
            </div>

            <div className={styles.demoItem} style={{ backgroundColor: 'var(--tg-theme-bottom-bar-bg-color)' }}>
                Bottom Bar Background Color (bottom_bar_bg_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-accent-text-color)' }}>
                Accent Text Color (accent_text_color)
            </div>

            <div className={styles.demoItem} style={{ backgroundColor: 'var(--tg-theme-section-bg-color)' }}>
                Section Background Color (section_bg_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-section-header-text-color)' }}>
                Section Header Text Color (section_header_text_color)
            </div>

            <div className={styles.demoItem} style={{ backgroundColor: 'var(--tg-theme-section-separator-color)' }}>
                Section Separator Color (section_separator_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-subtitle-text-color)' }}>
                Subtitle Text Color (subtitle_text_color)
            </div>

            <div className={styles.demoItem} style={{ color: 'var(--tg-theme-destructive-text-color)' }}>
                Destructive Text Color (destructive_text_color)
            </div>

            <button className={styles.button} onClick={onClick}>
                Show Alert
            </button>
        </div>
    );
};
