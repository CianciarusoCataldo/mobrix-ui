/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "../../../",
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./tests/core/utils/testSetup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "src/$1",
    "\\.(css|less)$": "<rootDir>/tests/core/utils/__mocks__/fileMock.js",
  },
  modulePathIgnorePatterns: [
    "src/tests/test-suites/(*.*.*|*.*)",
    "/tests/core/utils/*.*",
  ],
  testPathIgnorePatterns: ["src/tests/test-suites/", "/tests/core/utils/"],
  transformIgnorePatterns: ["node_modules/"],
  testEnvironment: "jsdom",
  testMatch: ["**/tests/core/main.test.tsx"],
  modulePathIgnorePatterns: ["/tests/test-suites/", "/tests/core/utils/"],
  coveragePathIgnorePatterns: ["/tests/test-suites/", "/tests/core/utils/"],
  collectCoverage: true,
  verbose: true,
};
