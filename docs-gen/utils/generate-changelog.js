const fs = require("fs");
const path = require("path");

const TEMPLATE_DIR = process.env["TEMPLATE_DIR"];
const DOCS_GEN_DIR = process.env["DOCS_GEN_DIR"];

try {
  const changelogSettings = JSON.parse(
    fs.readFileSync(path.join(DOCS_GEN_DIR, "changelog.json"), "utf8")
  );

  const CHANGELOG_TEMPLATE = fs.readFileSync(
    path.join(TEMPLATE_DIR, "changelog.md"),
    "utf8"
  );

  let outputSummary = "";
  let outputList = "";
  let allReleaseNotes = {};

  Object.keys(changelogSettings).forEach((changelogVersion, index) => {
    outputSummary += `- [${changelogVersion}](#${changelogVersion.replaceAll(
      ".",
      ""
    )})\n`;
    outputList += `<br>\n\n### ${changelogVersion}\n\n`;
    let tmpList = "";
    changelogSettings[changelogVersion].forEach((changelogEntry) => {
      tmpList += `- ${changelogEntry}\n`;
    });
    allReleaseNotes[changelogVersion] = tmpList;
    outputList += `${tmpList}\n`;
  });

  fs.writeFileSync(
    "CHANGELOG.md",
    CHANGELOG_TEMPLATE.replace("SUMMARY", outputSummary).replace(
      "LIST",
      outputList
    )
  );

  if (process.env["GENERATE_RELEASE_NOTES"] === true) {
    const packageSettings = JSON.parse(fs.readFileSync("package.json", "utf8"));
    fs.writeFileSync(
      "RELEASE_NOTES.md",
      allReleaseNotes[packageSettings.version]
    );
  }
} catch (e) {
  console.log(e);
}
