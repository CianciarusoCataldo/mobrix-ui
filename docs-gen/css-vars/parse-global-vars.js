const fs = require("fs");

const INPUT_PATH = process.env["OUTPUT_FILE_PATH"];

let readmeVarsTable = "";
let globalVarsTable = "";
let globalVarsPage = "";
let globalVarsList = "";

let cssVars = {};

try {
  globalVarsPage = fs.readFileSync(INPUT_PATH + "/global/index.md", "utf8");
} catch (e) {
  console.log(e);
  globalVarsPage = "";
}

try {
  globalVarsList = fs.readFileSync(INPUT_PATH + "/global/list.md", "utf8");
} catch (e) {
  console.log(e);
  globalVarsList = "";
}

try {
  globalVarsTable = fs.readFileSync(INPUT_PATH + "/global/table.md", "utf8");
} catch (e) {
  console.log(e);
  globalVarsTable = "";
}

try {
  readmeVarsTable = fs.readFileSync(process.env["README_CHAPTER_PATH"], "utf8");
} catch (e) {
  console.log(e);
  readmeVarsTable = "";
}

try {
  cssVars = require("../components/global-css-vars.json");
} catch (e) {
  console.log(e);
  cssVars = {};
}

Object.keys(cssVars).forEach((cssvar, index) => {
  globalVarsTable = globalVarsTable.replace(
    "PROP_NAME_" + index,
    `[${cssvar}](#${cssvar.replace("--", "")})`
  );
  readmeVarsTable = readmeVarsTable.replace(
    "PROP_NAME_" + index,
    `[${cssvar}](docs/components/global/css-vars.md#${cssvar.replace("--", "-")})`
  );

  if (cssVars[cssvar].description) {
    globalVarsList = globalVarsList.replace(
      "VAR_DESCRIPTION_" + index,
      cssVars[cssvar].description
    );
  }

  let internalFallBack = "/";
  let readmeFallBack = "/";

  if (cssVars[cssvar].fallback) {
    const fallback = cssVars[cssvar].fallback.replace("--", "-");
    internalFallBack = `[${cssVars[cssvar].fallback}](#${fallback})`;
    readmeFallBack = `[${cssVars[cssvar].fallback}](docs/components/global/css-vars.md#${fallback})`;
  }

  readmeVarsTable = readmeVarsTable.replace(
    "FALLBACK_" + index,
    readmeFallBack
  );

  globalVarsList = globalVarsList.replace(
    "FALLBACK_" + index,
    internalFallBack
  );

  let internalDefault = "/";

  if (cssVars[cssvar].defaultInternal) {
    const defaultInternal = cssVars[cssvar].defaultInternal;
    internalDefault = `[${defaultInternal}](#${defaultInternal.replace("--", "-")})`;
  } else if (cssVars[cssvar].defaultColor) {
    const defaultColor =
      "<div><div style='text-align:center;margin-auto;'>" +
      cssVars[cssvar].defaultColor +
      "</div><div style='text-align:center;margin-auto;'><div style='background:" +
      cssVars[cssvar].defaultColor +
      ";margin:auto; width:15px; height:15px;'/></div></div>";
    internalDefault = defaultColor;
  } else if (cssVars[cssvar].default) {
    const defaultInline = cssVars[cssvar].default;
    internalDefault = defaultInline;
  }

  globalVarsTable = globalVarsTable.replace(
    "DEFAULT_" + index,
    internalDefault
  );
  readmeVarsTable = readmeVarsTable.replace(
    "DEFAULT_" + index,
    internalDefault
  );
  globalVarsList = globalVarsList.replace("DEFAULT_" + index, internalDefault);
});

fs.writeFileSync(INPUT_PATH + "/global/table.md", globalVarsTable);
fs.writeFileSync(process.env["README_CHAPTER_PATH"], readmeVarsTable);
fs.writeFileSync(
  process.env["README_CHAPTER_PATH_PUBLISHED"],
  readmeVarsTable.replaceAll("docs/components", "components")
);
fs.writeFileSync(INPUT_PATH + "/global/list.md", globalVarsList);

fs.writeFileSync(
  INPUT_PATH + "/global/index.md",
  globalVarsPage
    .replace("COMPONENT_TABLE", globalVarsTable)
    .replace("COMPONENT_LIST", globalVarsList)
    .replace("COMPONENT_NAME", "MoBrix-ui global")
);
