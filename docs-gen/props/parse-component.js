const fs = require("fs");

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
    `[${actualProp}](#${actualProp.toLowerCase()})`
  );
  externalTable = externalTable.replace(
    "PROP_NAME_EXTERNAL_" + index,
    `[${actualProp}](../${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/props.md#${actualProp.toLowerCase()})`
  );
  globalTable = globalTable.replace(
    "PROP_NAME_GLOBAL_" + index,
    `[${actualProp}](${COMPONENT_TYPE_TO_PARSE}/${COMPONENT_NAME_TO_PARSE}/props.md#${actualProp.toLowerCase()})`
  );

  const outputType = propsToParse[actualProp].type || "/";

  inputTable = inputTable.replace("PROP_TYPE_" + index, outputType);
  list = list.replace("PROP_TYPE_" + index, outputType);
  externalTable = externalTable.replace(
    "PROP_TYPE_EXTERNAL_" + index,
    outputType
  );
  globalTable = globalTable.replace("PROP_TYPE_GLOBAL_" + index, outputType);

  const outputDefault = propsToParse[actualProp].default || "/";

  inputTable = inputTable.replace("PROP_DEFAULT_" + index, outputDefault);
  list = list.replace("PROP_DEFAULT_" + index, outputDefault);
  externalTable = externalTable.replace(
    "PROP_DEFAULT_EXTERNAL_" + index,
    outputDefault
  );
  globalTable = globalTable.replace(
    "PROP_DEFAULT_GLOBAL_" + index,
    outputDefault
  );

  const outputDescription = propsToParse[actualProp].description || "";
  list = list.replace("VAR_DESCRIPTION_" + index, outputDescription);
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
