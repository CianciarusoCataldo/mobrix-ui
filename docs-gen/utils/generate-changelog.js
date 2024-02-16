const fs = require("fs");
const path = require("path");

const TEMPLATE_DIR = process.env["TEMPLATE_DIR"];
const DOCS_GEN_DIR = process.env["DOCS_GEN_DIR"];

const changelogSettings = JSON.parse(
  fs.readFileSync(path.join(DOCS_GEN_DIR, "changelog.json"), "utf8")
);

const CHANGELOG_TEMPLATE = fs.readFileSync(
  path.join(TEMPLATE_DIR, "changelog.md"),
  "utf8"
);

let outputSummary = "";
let outputList = "";

Object.keys(changelogSettings).forEach((changelogVersion, index) => {
  outputSummary += `- [${changelogVersion}](#${changelogVersion.replaceAll(
    ".",
    ""
  )})\n`;
  outputList += `<br>\n\n### ${changelogVersion}\n\n`;
  changelogSettings[changelogVersion].forEach((changelogEntry) => {
    outputList += `- ${changelogEntry}\n`;
  });
  outputList += "\n";
});

fs.writeFileSync(
  "CHANGELOG.md",
  CHANGELOG_TEMPLATE.replace("SUMMARY", outputSummary).replace("LIST", outputList)
);

try {
} catch (e) {
  console.log(e);
}
