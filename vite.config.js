import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza o service worker automaticamente
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Meu Aplicativo React PWA',
        short_name: 'ReactPWA',
        description: 'Uma aplicação React incrível convertida em PWA!',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // Faz abrir como um aplicativo nativo, sem barra do navegador
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Importante para ícones adaptativos no Android
          }
        ]
      }
    })
  
  ],
  base: "/gamertag-generator",

})
