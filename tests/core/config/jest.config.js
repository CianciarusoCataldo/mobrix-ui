/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "../../../",
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$":
      "<rootDir>/tests/core/utils/__mocks__/fileMock.js",
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./tests/core/utils/testSetup.js"],
  modulePathIgnorePatterns: ["src/tests/test-suites", "/tests/core/utils/*.*"],
  testPathIgnorePatterns: ["src/tests/test-suites/", "/tests/core/utils/"],
  transformIgnorePatterns: ["node_modules/"],
  testEnvironment: "jsdom",
  testMatch: ["**/tests/main.test.tsx"],
  coveragePathIgnorePatterns: ["/tests/test-suites/", "/tests/core/utils/"],
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
