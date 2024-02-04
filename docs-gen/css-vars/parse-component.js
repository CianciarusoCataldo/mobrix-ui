const fs = require("fs");

const wrapElement = (element, styles = {}, wrapper = "div") => {
  let result = "<" + wrapper + " style='";

  Object.keys(styles).forEach((attribute) => {
    result += attribute + ":" + styles[attribute] + ";";
  });

  return result + "'>" + element + "</" + wrapper + ">";
};

const COMPONENT_NAME_TO_PARSE = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE_TO_PARSE = process.env["COMPONENT_TYPE"];
const INPUT_PATH = process.env["OUTPUT_FILE_PATH"];

let cssVars = {};

let internalPage = "";
let externalPage = "";
let globalPage = "";
let list = "";

try {
  list = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/list.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  list = "";
}
try {
  cssVars = require(
    "../components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/css-vars.json"
  );
} catch (e) {
  console.log(e);
  cssVars = {};
}

let inputTable = "";

try {
  inputTable = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/table.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  inputTable = "";
}

let externalTable = "";

try {
  externalTable = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/table-external.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  externalTable = "";
}

let globalTable = "";

try {
  globalTable = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/table-global.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  globalTable = "";
}

Object.keys(cssVars).forEach((cssvar, index) => {
  inputTable = inputTable.replace(
    "PROP_NAME_" + index,
    `[${cssvar}](#${cssvar})`
  );
  externalTable = externalTable.replace(
    "PROP_NAME_EXTERNAL_" + index,
    `[${cssvar}](../${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/css-vars.md#${cssvar})`
  );
  globalTable = globalTable.replace(
    "PROP_NAME_GLOBAL_" + index,
    `[${cssvar}](${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/css-vars.md#${cssvar})`
  );

  let internalFallBack = "/";
  let externalFallBack = "/";
  let globalFallback = "/";

  if (cssVars[cssvar].fallback) {
    const fallback = cssVars[cssvar].fallback;
    internalFallBack = `[${fallback}](#${fallback})`;
    externalFallBack = `[${fallback}](${COMPONENT_NAME_TO_PARSE}/css-vars.md#${fallback})`;
    globalFallback = `[${fallback}](${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/css-vars.md#${fallback})`;
  }

  inputTable = inputTable.replace("FALLBACK_" + index, internalFallBack);
  list = list.replace("FALLBACK_" + index, internalFallBack);
  externalTable = externalTable.replace(
    "FALLBACK_EXTERNAL_" + index,
    externalFallBack
  );
  globalTable = globalTable.replace("FALLBACK_GLOBAL_" + index, globalFallback);

  let internalDefault = "/";
  let externalDefault = "/";
  let globalDefault = "/";

  if (cssVars[cssvar].defaultInternal) {
    const defaultInternal = cssVars[cssvar].defaultInternal;
    internalDefault = `[${defaultInternal}](#${defaultInternal})`;
    externalDefault = `[${defaultInternal}](${COMPONENT_NAME_TO_PARSE}/css-vars.md#${defaultInternal})`;
    globalDefault = `[${defaultInternal}](${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/css-vars.md#${defaultInternal})`;
  } else if (cssVars[cssvar].defaultGlobal) {
    const defaultGlobal = cssVars[cssvar].defaultGlobal;
    internalDefault = `[${defaultGlobal}](../../global/css-vars.md#${defaultGlobal})`;
    externalDefault = `[${defaultGlobal}](../global/css-vars.md#${defaultGlobal})`;
    globalDefault = `[${defaultGlobal}](global/css-vars.md#${defaultGlobal})`;
  } else if (cssVars[cssvar].defaultColor) {
    const defaultColor =
      "<div><div style='text-align:center;margin-auto;'>" +
      cssVars[cssvar].defaultColor +
      "</div><div style='text-align:center;margin-auto;'><div style='background:" +
      cssVars[cssvar].defaultColor +
      ";margin:auto; width:15px; height:15px;'/></div></div>";
    internalDefault = defaultColor;
    externalDefault = defaultColor;
    globalDefault = defaultColor;
  } else if (
    cssVars[cssvar].defaultExternal &&
    cssVars[cssvar].defaultExternal.component &&
    cssVars[cssvar].defaultExternal.prop &&
    cssVars[cssvar].defaultExternal.type
  ) {
    const externalComponent = cssVars[cssvar].defaultExternal.component;
    const propName = cssVars[cssvar].defaultExternal.prop;

    internalDefault = `[${propName}](../../${cssVars[cssvar].defaultExternal.type}/${externalComponent}/css-vars.md#${propName})`;
    externalDefault = `[${propName}](../${cssVars[cssvar].defaultExternal.type}/${externalComponent}/css-vars.md#${propName})`;
    globalDefault = `[${propName}](components/${cssVars[cssvar].defaultExternal.type}/${externalComponent}/css-vars.md#${propName})`;
  } else if (cssVars[cssvar].default) {
    const defaultInline = cssVars[cssvar].default;
    internalDefault = defaultInline;
    externalDefault = defaultInline;
    globalDefault = defaultInline;
  }

  inputTable = inputTable.replace("DEFAULT_" + index, internalDefault);
  list = list.replace("DEFAULT_" + index, internalDefault);
  externalTable = externalTable.replace(
    "DEFAULT_EXTERNAL_" + index,
    externalDefault
  );
  globalTable = globalTable.replace("DEFAULT_GLOBAL_" + index, globalDefault);

  let description = "";
  if (cssVars[cssvar].description) {
    description = cssVars[cssvar].description;
  }

  list = list.replace("VAR_DESCRIPTION_" + index, description);
});

fs.writeFileSync(
  INPUT_PATH +
    "/components/" +
    COMPONENT_TYPE_TO_PARSE +
    "/" +
    COMPONENT_NAME_TO_PARSE +
    "/table.md",
  inputTable
);

try {
  internalPage = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/index.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  internalPage = "";
}

try {
  externalPage = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/index-external.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  externalPage = "";
}

try {
  globalPage = fs.readFileSync(
    INPUT_PATH +
      "/components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/index-global.md",
    "utf8"
  );
} catch (e) {
  console.log(e);
  globalPage = "";
}

internalPage = internalPage.replace("COMPONENT_NAME", COMPONENT_NAME_TO_PARSE);
internalPage = internalPage.replace("COMPONENT_TABLE", inputTable);
internalPage = internalPage.replace("COMPONENT_LIST", list);

externalPage = externalPage.replace("COMPONENT_NAME", COMPONENT_NAME_TO_PARSE);
externalPage = externalPage.replace("COMPONENT_TABLE", externalTable);

globalPage = globalPage.replace("COMPONENT_NAME", COMPONENT_NAME_TO_PARSE);
globalPage = globalPage.replace("COMPONENT_TABLE", globalTable);

fs.writeFileSync(
  INPUT_PATH +
    "/components/" +
    COMPONENT_TYPE_TO_PARSE +
    "/" +
    COMPONENT_NAME_TO_PARSE +
    "/index.md",
  internalPage
);

fs.writeFileSync(
  INPUT_PATH +
    "/components/" +
    COMPONENT_TYPE_TO_PARSE +
    "/" +
    COMPONENT_NAME_TO_PARSE +
    "/index-external.md",
  externalPage
);

fs.writeFileSync(
  INPUT_PATH +
    "/components/" +
    COMPONENT_TYPE_TO_PARSE +
    "/" +
    COMPONENT_NAME_TO_PARSE +
    "/index-global.md",
  globalPage
);
