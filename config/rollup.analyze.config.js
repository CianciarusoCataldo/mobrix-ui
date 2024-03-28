const analyze = require("rollup-plugin-analyzer");
const typescript = require("rollup-plugin-typescript2");
const del = require("rollup-plugin-delete");
const postcss = require("rollup-plugin-postcss");
const terser = require("@rollup/plugin-terser");
const postcssImport = require("postcss-import");
const cleanup = require("rollup-plugin-cleanup");
const pkg = require("../package.json");
const { bundleStats } = require("rollup-plugin-bundle-stats");

const limitBytes = 1e6;

const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < limitBytes) return;
  console.log(`Bundle size exceeds ${limitBytes} bytes: ${bundleSize} bytes`);
  return process.exit(1);
};

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
        banner: "require('./styles.css')",
      },
      {
        file: pkg.module,
        format: "esm",
        plugins: [],
        banner: "/* eslint-disable */ import './styles.css';",
      },
    ],
    plugins: [
      del({ targets: ["dist/*"] }),
      postcss({
        plugins: [postcssImport],
        minimize: true,
        extract: "styles.css",
      }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      cleanup({ comments: "none" }),
      analyze({ skipFormatted: false, stdout: true, summaryOnly: true }),
    ],
    external: Object.keys(pkg.peerDependencies || []),
  },
];
