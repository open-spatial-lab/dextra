// import inlineWorkerPlugin from "esbuild-plugin-inline-worker";
import fs from "fs";
import plugin from 'node-stdlib-browser/helpers/esbuild/plugin'
import stdLibBrowser from "node-stdlib-browser"
import {createRequire} from 'module'

const require = createRequire(import.meta.url)

export const pkg = JSON.parse(fs.readFileSync("./package.json"));

export const entrypoint = "src/FullBundle.ts";
export const outDir = "dist";

export const banner = `/**
 * Open Spatial Lab Bundle v${pkg.version}
 * Copyright (c) ${new Date().getFullYear()} OSL.
 *
 * @license MIT
 */`;

export const options = {
  entryPoints: [entrypoint],
  format: "esm",
  bundle: true,
  sourcemap: true,
  loader: {
  },
  inject: [require.resolve('node-stdlib-browser/helpers/esbuild/shim')],
  define: {
    global: 'global',
    process: 'process',
    Buffer: 'Buffer'
  },
  plugins: [plugin(stdLibBrowser)],
  logLevel: "info",
  logLimit: 0,
  banner: { js: banner },
  define: {
    VERSION: `"${pkg.version}"`,
  },
};