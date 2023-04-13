import { defineConfig } from 'vite'
import path, { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/regression.ts',
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
      "lit-element": path.resolve("./node_modules/lit-element")
    }
  }
})
