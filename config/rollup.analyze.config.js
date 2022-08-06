import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { visualizer } from 'rollup-plugin-visualizer';
import analyze from "rollup-plugin-analyzer";

import pkg from "../package.json";

export default [
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
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
