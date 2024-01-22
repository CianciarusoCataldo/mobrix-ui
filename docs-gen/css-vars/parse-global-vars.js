const fs = require("fs");

const INPUT_PATH = process.env["OUTPUT_FILE_PATH"];

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
  cssVars = require("./components/global.json");
} catch (e) {
  console.log(e);
  cssVars = {};
}

Object.keys(cssVars).forEach((cssvar, index) => {
  globalVarsTable = globalVarsTable.replace(
    "PROP_NAME_" + index,
    `[${cssvar}](#${cssvar.replace("--", "")})`
  );

  if (cssVars[cssvar].description) {
    globalVarsList = globalVarsList.replace(
      "VAR_DESCRIPTION_" + index,
      cssVars[cssvar].description
    );
  }

  let internalFallBack = "/";

  if (cssVars[cssvar].fallback) {
    const fallback = cssVars[cssvar].fallback.replace("--", "");
    internalFallBack = `[${fallback}](#${fallback})`;
  }

  globalVarsTable = globalVarsTable.replace(
    "FALLBACK_" + index,
    internalFallBack
  );

  globalVarsList = globalVarsList.replace(
    "FALLBACK_" + index,
    internalFallBack
  );

  let internalDefault = "/";

  if (cssVars[cssvar].defaultInternal) {
    const defaultInternal = cssVars[cssvar].defaultInternal;
    internalDefault = `[${defaultInternal}](#${defaultInternal.replace("--", "")})`;
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
  globalVarsList = globalVarsList.replace("DEFAULT_" + index, internalDefault);
});

fs.writeFileSync(INPUT_PATH + "/global/table.md", globalVarsTable);
fs.writeFileSync(INPUT_PATH + "/global/list.md", globalVarsList);

fs.writeFileSync(
  INPUT_PATH + "/global/index.md",
  globalVarsPage
    .replace("COMPONENT_TABLE", globalVarsTable)
    .replace("COMPONENT_LIST", globalVarsList)
    .replace("COMPONENT_NAME", "MoBrix-ui global CSS variables")
);
