const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const terser = require("@rollup/plugin-terser");
const postcssImport = require("postcss-import");

const pkg = require("../package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/mobrix-ui-preview/index.cjs",
        format: "cjs",
        banner: "require('./styles.css')",
        plugins: [terser()],
      },
      {
        file: "playground/src/mobrix-ui-preview/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
      {
        file: "test-app/src/mobrix-ui-preview/index.cjs",
        format: "cjs",
        banner: "require('./styles.css')",
        plugins: [terser()],
      },
      {
        file: "test-app/src/mobrix-ui-preview/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
        banner: "require('./styles.css')",
      },
      {
        file: pkg.module,
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
    ],
    plugins: [
      postcss({
        plugins: [postcssImport],
        minimize: true,
        extract: "styles.css",
      }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || []),
  },
];
