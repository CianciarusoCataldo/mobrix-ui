const semver = require("semver");

const PACKAGE_JSON_VERSION = process.env["PACKAGE_JSON_VERSION"];
const LATEST_VERSION = process.env["LATEST_VERSION"];

let output = 0;

if (
  semver.patch(PACKAGE_JSON_VERSION) === 0 &&
  semver.gt(PACKAGE_JSON_VERSION, LATEST_VERSION)
) {
  output = 1;
}

console.log(output);
