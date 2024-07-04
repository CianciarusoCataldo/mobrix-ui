import pkg from "../package.json";
import test from "./test-suites/core";

const fs = require("fs");

const getTests = (group: string) => {
  let tests: (() => void)[] = [];

  fs.readdirSync(__dirname + "/test-suites/" + group).forEach((file) => {
    tests.push(
      require(__dirname +
        "/test-suites/" +
        group +
        "/" +
        file.replace(".tsx", "")).default
    );
  });

  return tests;
};

describe(`Mobrix-ui v${pkg.version}`, () => {
  describe("\n      MoBrix-ui core\n", () => {
    test();
  });
  describe("\n      Atoms\n", () => {
    getTests("atoms").forEach((singleTest) => {
      singleTest();
    });
  });
  describe("\n      Molecules\n", () => {
    getTests("molecules").forEach((singleTest) => {
      singleTest();
    });
  });
  describe("\n      Organisms\n", () => {
    getTests("organisms").forEach((singleTest) => {
      singleTest();
    });
  });
});
