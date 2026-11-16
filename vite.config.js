import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/learn-react/',
    plugins: [react()],
    oxc: {
        include: /src\/.*\.(js|jsx)$/,
        lang: 'jsx',
        jsx: {
            runtime: 'classic',
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
    },
});
