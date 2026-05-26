import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,      // change to your preferred port
    open: true       // opens browser automatically
  },
  base: process.env.VITE_BASE_URL || '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
