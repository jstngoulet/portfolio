import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import usePHP from 'vite-plugin-php'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    usePHP({
       binary: '/opt/lampp/bin/php-8.1.10', 
       entry: ['php/*.php'] 
      }
    )
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {},
  assetsInclude: ['**/*.md', '**/*.php'],
  define: { 'process.env': 'import.meta.env' }
})
