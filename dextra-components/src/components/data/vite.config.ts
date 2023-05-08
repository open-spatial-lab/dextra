import { defineConfig } from 'vite'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    target: 'es2018',
    assetsInlineLimit: 0,
    sourcemap: true,
    lib: {
      entry: 'src/data.ts',
      formats: ['es'],
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [],
  // TODO exclude core bundle
  // optimizeDeps: {
  //   exclude: ['./node_modules/lit-element', './node_modules/lit', './node_modules/immer', './node_modules/zustand'],
  // },
  "resolve": {
    "alias": {
      
    }
  }
})
