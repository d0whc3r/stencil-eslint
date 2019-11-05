module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/rules/*.ts', '!src/rules/index.ts', '!tests/*'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: './report/coverage/jest',
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40
    }
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
};
