const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const { visualizer } = require("rollup-plugin-visualizer");
const analyze = require("rollup-plugin-analyzer");

const pkg = require("../package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      typescript(),
      analyze(),
      visualizer(),
    ],
    external: Object.keys(pkg.peerDependencies || []),
  },
];
