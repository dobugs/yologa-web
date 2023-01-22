module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  plugins: [
    {
      plugin: require('@dealmore/craco-plugin-babel-include'),
      options: {
        include: ['@common/map', '@common/utils'],
      },
    },
  ],
};
