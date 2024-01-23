const fs = require("fs");

const wrapElement = (element, styles = {}, wrapper = "div") => {
  let result = "<" + wrapper + " style='";

  Object.keys(styles).forEach((attribute) => {
    result += attribute + ":" + styles[attribute] + ";";
  });

  return result + "'>" + element + "</" + wrapper + ">";
};

const centerElement = (element, styles, wrapper = "div") =>
  wrapElement(
    element,
    {
      "text-align": "center",
      margin: "auto",
      ...styles,
    },
    wrapper
  );

const COMPONENT_NAME_TO_PARSE = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE_TO_PARSE = process.env["COMPONENT_TYPE"];
const INPUT_PATH = process.env["OUTPUT_FILE_PATH"];

let propsToParse = {};

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
  propsToParse = require(
    "../components/" +
      COMPONENT_TYPE_TO_PARSE +
      "/" +
      COMPONENT_NAME_TO_PARSE +
      "/props.json"
  );
} catch (e) {
  console.log(e);
  propsToParse = {};
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

Object.keys(propsToParse).forEach((actualProp, index) => {
  inputTable = inputTable.replace(
    "PROP_NAME_" + index,
    `[${actualProp}](#${actualProp})`
  );
  externalTable = externalTable.replace(
    "PROP_NAME_EXTERNAL_" + index,
    `[${actualProp}](../../${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/index.md#${actualProp})`
  );
  globalTable = globalTable.replace(
    "PROP_NAME_GLOBAL_" + index,
    `[${actualProp}](components/${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/index.md#${actualProp})`
  );

  let internalFallBack = "/";
  let externalFallBack = "/";
  let globalFallback = "/";

  if (propsToParse[actualProp].type) {
    const type = propsToParse[actualProp].type;
    internalFallBack = `[${type}](#${type})`;
    externalFallBack = `[${type}](${COMPONENT_NAME_TO_PARSE}/index.md#${type})`;
    globalFallback = `[${type}](components/${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/index.md#${type})`;
  }

  inputTable = inputTable.replace("PROP_TYPE_" + index, internalFallBack);
  list = list.replace("PROP_TYPE_" + index, internalFallBack);
  externalTable = externalTable.replace(
    "PROP_TYPE_EXTERNAL_" + index,
    externalFallBack
  );
  globalTable = globalTable.replace(
    "PROP_TYPE_GLOBAL_" + index,
    globalFallback
  );

  let internalDefault = "/";
  let externalDefault = "/";
  let globalDefault = "/";

  if (propsToParse[actualProp].default) {
    const defaultInline = propsToParse[actualProp].default;
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
