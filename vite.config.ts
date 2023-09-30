import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  VitePWA(    
    {
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*'],  // cache all the imports
    },  
    devOptions: {
      enabled: true
    },
    includeAssets: [
      "**/*",
    ],
    
    manifest: {
      name: 'Insure 360',
      short_name: 'Insure360',
      description: 'Official insure 360 app',
      theme_color: '#cbcbcb',

      icons: [
        {
          src: 'icons/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        },
        {
          src: 'icons/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
      scope: "/",
      start_url: "/",
      display: "standalone",
      background_color: "#284dff"
    },
   
  })],
  server: {
    port: 3000
  }
})
