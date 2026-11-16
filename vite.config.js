import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/learn-react/',
    plugins: [
        react({
            include: /\.js$/,
        }),
    ],
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.js$/,
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
    },
});
