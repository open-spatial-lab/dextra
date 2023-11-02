import type { StorybookConfig } from "@storybook/web-components-vite";
import { join, dirname } from "path";
import { mergeConfig } from "vite";
import webpack from "webpack";
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: getAbsolutePath("@storybook/builder-vite"),
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      define: { "process.env": {} },
      PluginArray: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    });
  },
};
export default config;
