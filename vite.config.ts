import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import express from './express-plugin';

// https://vite.dev/config/
export default defineConfig({
    // plugins: [react(),express('server')],
    plugins: [react()],
    build: {
        outDir: 'build'
    },
    base: './'
})
