import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/worker.ts'),
      name: 'osl-geo-worker',
      fileName: (format) => `osl-geo-worker.${format}.cjs`
    }
  }
});