import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name as nameLib, version as versionLib } from "./package.json"

const PROJECT_NAME = nameLib.replaceAll('-', '_')
const PROJECT_VERSION = versionLib

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: false,
    /*
    lib: {
      entry: "./src/main.jsx",
      formats: [ "es"],
      fileName: (format) => format === "es" ? `${PROJECT_NAME}.js` : `${PROJECT_NAME}.cjs`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return `${PROJECT_NAME}.css`
          return assetInfo.name;
        }
      }
    }
    */
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const shortFileNameArr = filename.split('/')
        const shortFileName = shortFileNameArr[shortFileNameArr.length - 1]

        const shortFileNameWithoutExt = shortFileName.split('.')[0]

        return `${PROJECT_NAME}_${PROJECT_VERSION.split('.').join('-')}_${shortFileNameWithoutExt}__${name}`
      }
    }
  }
})
