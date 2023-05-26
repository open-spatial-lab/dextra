import { defineConfig } from "vite";
import { resolve } from "path";
// https://vitejs.dev/config/
const DEFAULT_EXCLUDE_DEPS = [
  "./node_modules/@spectrum-web-components/*",
  "./node_modules/lit*",
  "./node_modules/@observablehq/plot",
  "./node_modules/valtio",
];
export const makeViteConfig = ({
  entry,
  excludeDeps = DEFAULT_EXCLUDE_DEPS,
}: {
  entry: string;
  excludeDeps?: string[];
}) =>
  defineConfig({
    base: "/",
    build: {
      outDir: "dist",
      target: "es2018",
      assetsInlineLimit: 0,
      sourcemap: true,
      lib: {
        entry,
        formats: ["es"],
      },
      manifest: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
    },
    plugins: [],
    // TODO exclude core bundle
    optimizeDeps: {
      exclude: excludeDeps,
    },
    resolve: {
      alias: {},
    },
  });
