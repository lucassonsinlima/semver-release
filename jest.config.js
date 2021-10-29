module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  clearMocks: true,
  setupFiles: [
    '<rootDir>/tests/unit/setup'
  ],
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/tests/unit/$1'
  }
};