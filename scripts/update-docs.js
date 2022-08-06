var fs = require("fs");
var PKG = require("../package.json");
var buffer = fs.readFileSync("./CHANGELOG.md");

var fileContent = buffer.toString();

var splitted = fileContent.split("## Versions");
var versionAlreadyPresent = splitted[1]
  .split("[")[1]
  .startsWith(PKG.version.toString());

var resVersions = "";

if (!versionAlreadyPresent) {
  resVersions =
    "-   [" + PKG.version + "](#" + PKG.version + ")\n" + splitted[1];
} else {
  resVersions = splitted[1];
}

var splittedChanges = resVersions.split("## Changes");

var resChanges = "";

if (!versionAlreadyPresent) {
  resChanges =
    "\n<br>\n\n### " + PKG.version + "-test\n-   \n\n" + splittedChanges[1];
} else {
  resChanges = splittedChanges[1];
}

fs.writeFileSync(
  "./CHANGELOG.md",
  splitted[0] +
    "## Versions" +
    splittedChanges[0] +
    "## Changes" +
    resChanges
);
