import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

//creation of absolute paths for the project

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@styles": "/src/styles",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
    },
  },
});