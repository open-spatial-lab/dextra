import { defineConfig } from 'vite'
import path, { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/chips.ts',
      formats: ['es'],
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // TODO exclude core bundle
  // optimizeDeps: {
  //   exclude: ['./node_modules/lit-element', './node_modules/lit', './node_modules/immer', './node_modules/zustand'],
  // },
  "resolve": {
    "alias": {
      
    }
  }
})
