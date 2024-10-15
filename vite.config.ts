import react from '@vitejs/plugin-react';
import { config } from 'dotenv-safe';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

config({ allowEmptyValues: true });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const apiProxyUrl = process.env.VITE_API_PROXY_URL;

    return {
        base: '/',
        build: {
            outDir: 'build',
        },
        css: {
            modules: {
                // Change `__` underscores to `--` dashes
                // for double-click selection of class part from devtools
                // Shorten for production to minimize bundle size
                generateScopedName: mode === 'development' ? '[name]--[local]--[hash:base64:5]' : '[hash:base64:5]',
            },
        },
        server: {
            port: Number(process.env.VITE_PORT),
            strictPort: true,
            proxy: {
                '/api': apiProxyUrl,
            },
        },
        resolve: {
            alias: {
                '@domains': path.resolve(__dirname, './src/domains'),
                '@store': path.resolve(__dirname, './src/store'),
                '@api': path.resolve(__dirname, './src/api'),
                '@utils': path.resolve(__dirname, './src/utils'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@vendor': path.resolve(__dirname, './src/vendor'),
                '@views': path.resolve(__dirname, './src/views'),
                '@layouts': path.resolve(__dirname, './src/layouts'),
                '@containers': path.resolve(__dirname, './src/containers'),
                '@components': path.resolve(__dirname, './src/components'),
                '@styles': path.resolve(__dirname, './src/styles'),
                '@assets': path.resolve(__dirname, './src/assets'),
            },
        },
        plugins: [
            react(),
            svgrPlugin({
                svgrOptions: {
                    ref: true,
                },
            }),
        ],
    };
});
