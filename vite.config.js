import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/learn-react/',
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3033',
            },
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
    },
});
