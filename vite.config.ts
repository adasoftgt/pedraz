import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({projects: ['./tsconfig.app.json']})],
  base: '/pedraz/', // Replace with your repository name
  build: {
    outDir: 'dist', // Especifica el directorio de salida
  },
  
})
