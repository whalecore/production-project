const config = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
}
export default config
