import type { StorybookConfig } from '@storybook/nextjs'

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal(baseConfig) {
    baseConfig.resolve!.alias = {
      ...baseConfig.resolve!.alias,
    }
    baseConfig.resolve!.plugins = [
      ...(baseConfig.resolve!.plugins || []),
      new TsconfigPathsPlugin(),
    ]
    return baseConfig
  },
}
export default config
