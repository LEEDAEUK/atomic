module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  setupFiles: ['./tests/unit/setup.js'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './tests/unit/fileTransformer.js',
  },
};
