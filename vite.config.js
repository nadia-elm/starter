import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // You can add more file extensions here if needed
      // For JSX in .js files, add 'js' to the list
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    },
  },
});

